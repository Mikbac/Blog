import { ConfigurationService } from 'src/app/services/configuration.service';
import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
    faCoffee = faCoffee;

    constructor(private configurationService: ConfigurationService) {}

    ngOnInit(): void {}

    get year(): string {
        return new Date().getFullYear().toString();
    }

    get authorName(): string {
        return this.configurationService.authorName;
    }

    get authorGitHub(): string {
        return this.configurationService.authorGitHub;
    }

    get authorLinkedIn(): string {
        return this.configurationService.authorLinkedIn;
    }
}
