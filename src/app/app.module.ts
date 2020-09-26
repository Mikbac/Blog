import { MenuModule } from './modules/menu/menu.module';
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

// npm install ngx-spinner --save
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// npm i --save firebase @angular/fire
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { LoaderComponent } from './components/loader/loader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// npm install @ngx-translate/core @ngx-translate/http-loader rxjs --save
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AngularFireStorageModule } from '@angular/fire/storage';
@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        LoaderComponent,
        LazyLoadingDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxSpinnerModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireStorageModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        HeaderModule,
        PostsModule,
        JokeModule,
        MenuModule,
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

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
