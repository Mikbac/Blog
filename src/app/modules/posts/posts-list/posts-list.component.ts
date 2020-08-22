import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { Post } from '../post-model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
})
export class PostsListComponent implements OnInit {
    posts$: Observable<Post[]> = this.postService.posts$;

    constructor(
        private spinner: NgxSpinnerService,
        private postService: PostService
    ) {}

    ngOnInit(): void {
    }
}
