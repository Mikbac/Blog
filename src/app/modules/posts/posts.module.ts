import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';

@NgModule({
    declarations: [PostsListComponent],
    imports: [CommonModule, PostsRoutingModule, NgxSpinnerModule],
    exports: [PostsListComponent],
})
export class PostsModule {}
