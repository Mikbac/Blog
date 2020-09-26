import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { LanguageComponent } from './language/language.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [LanguageComponent],
    imports: [
        CommonModule,
        MenuRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
    ],
    exports: [LanguageComponent],
})
export class MenuModule {}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
