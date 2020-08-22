import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
    constructor(
        private title: Title,
        private meta: Meta,
        private location: Location
    ) {}

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
