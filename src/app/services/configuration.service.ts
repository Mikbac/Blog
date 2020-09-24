import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Configuration } from '../models/configuration-model';

@Injectable({
    providedIn: 'root',
})
export class ConfigurationService {
    private configuration: Configuration;

    constructor() {
        this.configuration = environment.configuration;
    }

    get defaultLanguage(): string {
        return this.configuration.defaultLanguage;
    }

    get logoName(): string {
        return this.configuration.logo.name;
    }

    get logoTag(): string {
        return this.configuration.logo.tag;
    }
}
