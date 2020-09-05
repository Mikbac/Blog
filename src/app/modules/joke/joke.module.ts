import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokeRoutingModule } from './joke-routing.module';
import { JokeComponent } from './joke/joke.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [JokeComponent],
  imports: [
    CommonModule,
    JokeRoutingModule,
    NgxSpinnerModule,
    HttpClientModule
  ],
  exports: [JokeComponent],
})
export class JokeModule { }
