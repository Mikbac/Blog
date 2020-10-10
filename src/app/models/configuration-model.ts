export interface Configuration {
    author: { name: string; gitHub: string; linkedIn: string };
    defaultLanguage: string;
    logo: {
        name: string;
        tag: string;
        path: string;
    };
    pagination: {
        pageSize: number;
    };
    jokeAPIAddress: string;
}

export class ConfigurationNull implements Configuration {
    author: {
        name: '';
        gitHub: '';
        linkedIn: '';
    };
    defaultLanguage = '';
    logo: {
        name: '';
        tag: '';
        path: '';
    };
    pagination: {
        pageSize: 0;
    };
    jokeAPIAddress: '';
}
