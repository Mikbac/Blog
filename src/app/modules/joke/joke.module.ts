import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokeRoutingModule } from './joke-routing.module';
import { JokeComponent } from './joke/joke.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [JokeComponent],
    imports: [
        CommonModule,
        JokeRoutingModule,
        NgxSpinnerModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
    ],
    exports: [JokeComponent],
})
export class JokeModule {}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
