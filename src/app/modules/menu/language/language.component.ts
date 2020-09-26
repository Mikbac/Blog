import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigurationService } from 'src/app/services/configuration.service';

@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
})
export class LanguageComponent implements OnInit {
    constructor(
        private configurationService: ConfigurationService,
        private translate: TranslateService
    ) {}

    ngOnInit(): void {}

    switchLanguage(language: string) {
        this.translate.use(language);
    }

    isLanguageActive(language: string): boolean {
        return this.translate.currentLang == null
            ? this.configurationService.defaultLanguage === language
            : this.translate.currentLang === language;
    }
}
