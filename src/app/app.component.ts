import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { ConfigurationService } from './services/configuration.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(
        private title: Title,
        private meta: Meta,
        private location: Location,
        private configurationService: ConfigurationService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang(configurationService.defaultLanguage);
    }

    ngOnInit(): void {
        this.title.setTitle('Blog');
        this.meta.updateTag({
            name: 'description',
            content: 'Blog application',
        });
        this.meta.updateTag({
            name: 'image',
            content: '../assets/image/logo.png',
        });
        this.meta.updateTag({
            name: 'site',
            content: 'My blog',
        });
        this.meta.updateTag({
            name: 'author',
            content: 'MikBac',
        });
        this.meta.updateTag({
            name: 'keywords',
            content: 'java spring angular',
        });
    }

    navigateTo(url) {
        this.location.go(url);
    }

    goBack() {
        this.location.back();
    }

    goForward() {
        this.location.forward();
    }
}
