export interface Configuration {
    defaultLanguage: string;
    logo: {
        name: string;
        tag: string;
    };
}

export class ConfigurationNull implements Configuration {
    defaultLanguage = '';
    logo: {
        name: '';
        tag: '';
    };
}
