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

    private pageNumber = 0;
    private oldestPostId: string;
    private isNextPage = true;

    constructor(
        private postService: PostService,
        private configurationService: ConfigurationService,
        private spinner: NgxSpinnerService
    ) {}

    ngOnInit(): void {
        this.spinner.show();
        this.setOldestPostFromPenultimatePage();
    }

    public get isNextPageActive(): boolean {
        return this.isNextPage;
    }

    public get isPreviousPageActive(): boolean {
        return this.pageNumber !== 0;
    }

    public checkLastPost(postId: string): void {
        if (postId === this.oldestPostId) {
            this.isNextPage = false;
        }
    }

    private setOldestPostFromPenultimatePage(): void {
        this.postService
            .getOldestPosts(this.configurationService.paginationPageSize)
            .pipe(map((post) => this.getPostMapping(post)))
            .subscribe((posts) => {
                this.oldestPostId = posts[0].id;
            });
    }

    public setNextPage(): void {
        let oldestPost: Post = null;
        this.posts$.pipe(map((post) => this.getPostMapping(post))).subscribe((posts) => {
            oldestPost = posts[0];
            posts.forEach((post) => {
                this.checkLastPost(post.id);
                if (post.date.seconds < oldestPost.date.seconds) {
                    oldestPost = post;
                }
            });
            this.posts$ = this.postService.getNextPostsPage$(
                oldestPost.date,
                this.configurationService.paginationPageSize
            );
        });
        this.pageNumber += 1;
    }

    public setPreviousPage(): void {
        this.isNextPage = true;
        let latestPost: Post = null;
        this.posts$.pipe(map((post) => this.getPostMapping(post))).subscribe((posts) => {
            latestPost = posts[posts.length - 1];
            posts.forEach((post) => {
                if (post.date.seconds > latestPost.date.seconds) {
                    latestPost = post;
                }
            });
            this.posts$ = this.postService.getPreviousPostsPage$(
                latestPost.date,
                this.configurationService.paginationPageSize
            );
        });
        this.pageNumber -= 1;
    }

    getPostMapping(post) {
        return post.map((o) => {
            const data = o.payload.doc.data() as Post;
            const id = o.payload.doc.id;
            return { id, ...data };
        });
    }
}
