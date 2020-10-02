import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { Post } from '../models/post-model';
import { NgxSpinnerService } from 'ngx-spinner';
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
})
export class PostsListComponent implements OnInit {
    posts$: Observable<DocumentChangeAction<Post>[]> = this.postService.posts$;

    constructor(
        private postService: PostService,
        private spinner: NgxSpinnerService
    ) {}

    ngOnInit(): void {
        this.spinner.show();
    }
}
