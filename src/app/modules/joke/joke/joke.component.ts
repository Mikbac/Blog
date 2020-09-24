import { JokeService } from './../joke.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigurationService } from 'src/app/services/configuration.service';

@Component({
    selector: 'app-joke',
    templateUrl: './joke.component.html',
})
export class JokeComponent implements OnInit {
    public joke$ = this.jokeService.joke$;

    constructor(
        private jokeService: JokeService,
        private configurationService: ConfigurationService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang(configurationService.defaultLanguage);
    }

    ngOnInit(): void {}
}
