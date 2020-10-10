import { ConfigurationService } from './../../../services/configuration.service';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { Post } from '../models/post-model';
import { NgxSpinnerService } from 'ngx-spinner';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
})
export class PostsListComponent implements OnInit {
    posts$: Observable<DocumentChangeAction<Post>[]> = this.postService.getLatestPosts$(
        this.configurationService.paginationPageSize
    );

    constructor(
        private postService: PostService,
        private configurationService: ConfigurationService,
        private spinner: NgxSpinnerService
    ) {}

    ngOnInit(): void {
        this.spinner.show();
    }

    setNextPage() {
        let oldestPost: Post = null;
        this.posts$.pipe(map((post) => this.getPostMapping(post))).subscribe((posts) => {
            oldestPost = posts[0];
            posts.forEach((post) => {
                if (post.date.seconds < oldestPost.date.seconds) {
                    oldestPost = post;
                }
            });
            this.posts$ = this.postService.getNextPostsPage$(
                oldestPost.date,
                this.configurationService.paginationPageSize
            );
        });
    }

    setPreviousPage() {
        let oldestPost: Post = null;
        this.posts$.pipe(map((post) => this.getPostMapping(post))).subscribe((posts) => {
            oldestPost = posts[0];
            posts.forEach((post) => {
                if (post.date.seconds > oldestPost.date.seconds) {
                    oldestPost = post;
                }
            });
            this.posts$ = this.postService.getPreviousPostsPage$(
                oldestPost.date,
                this.configurationService.paginationPageSize
            );
        });
    }

    getPostMapping(post) {
        return post.map((o) => {
            const data = o.payload.doc.data() as Post;
            const id = o.payload.doc.id;
            return { id, ...data };
        });
    }
}
