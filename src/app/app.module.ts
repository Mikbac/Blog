import { HeaderModule } from './modules/header/header.module';
import { environment } from './../environments/environment';
import { PostsModule } from './modules/posts/posts.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AngularFireModule } from '@angular/fire'; // npm i --save firebase @angular/fire
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
    declarations: [AppComponent, HomePageComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxSpinnerModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        HeaderModule,
        PostsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
