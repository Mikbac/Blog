import { JokeService } from './../joke.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-joke',
    templateUrl: './joke.component.html',
})
export class JokeComponent implements OnInit {
    public joke$ = this.jokeService.joke$;

    constructor(
        private jokeService: JokeService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('en');
    }

    ngOnInit(): void {}
}
