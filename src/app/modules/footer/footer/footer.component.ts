import { ConfigurationService } from 'src/app/services/configuration.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.scss']
})
export class FooterComponent implements OnInit {
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
