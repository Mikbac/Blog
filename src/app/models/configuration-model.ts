export interface Configuration {
    defaultLanguage: string;
    logo: {
        name: string;
        tag: string;
        path: string;
    };
    jokeAPIAddress: string;
}

export class ConfigurationNull implements Configuration {
    defaultLanguage = '';
    logo: {
        name: '';
        tag: '';
        path: '';
    };
    jokeAPIAddress: '';
}
