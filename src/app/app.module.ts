import { LazyLoadingDirective } from './directives/lazy-loading.directive';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { LoaderService } from './services/loader.service';
import { JokeModule } from './modules/joke/joke.module';
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
import { LoaderComponent } from './components/loader/loader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, HomePageComponent, LoaderComponent, LazyLoadingDirective],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxSpinnerModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        HeaderModule,
        PostsModule,
        JokeModule,
    ],
    providers: [
        LoaderService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptor,
            multi: true,
        },
    ],
    exports: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
