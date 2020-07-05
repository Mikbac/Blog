import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
    declarations: [AppComponent, HomePageComponent],
    imports: [BrowserModule, AppRoutingModule, NgxSpinnerModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
