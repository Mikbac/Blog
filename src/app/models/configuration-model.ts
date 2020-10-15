export interface Configuration {
    readonly author: Author;
    readonly defaultLanguage: string;
    readonly logo: Logo;
    readonly pagination: {
        pageSize: number;
    };
    readonly jokeAPIAddress: string;
}

export interface Author {
    readonly name: string;
    readonly gitHub: string;
    readonly linkedIn: string;
}

export interface Logo {
    readonly name: string;
    readonly tag: string;
    readonly path: string;
}
