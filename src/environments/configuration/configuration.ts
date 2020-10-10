import { Configuration } from 'src/app/models/configuration-model';

export const mainConfiguration: Configuration = {
    author: {
        name: 'MikBac',
        gitHub: 'https://github.com/Mikbac',
        linkedIn: 'https://www.linkedin.com/in/mikolaj-bachorz/',
    },
    defaultLanguage: 'en',
    logo: {
        name: 'logo.png',
        tag: 'MikBac logo',
        path: '/images/logo/logo.png',
    },
    pagination: {
        pageSize: 5,
    },
    jokeAPIAddress: 'https://icanhazdadjoke.com/',
};
