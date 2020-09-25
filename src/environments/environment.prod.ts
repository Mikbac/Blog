import { mainConfiguration } from './configuration/configuration';
import { firebaseConfiguration } from './firebase/firebase';

export const environment = {
    production: true,
    firebase: firebaseConfiguration,
    configuration: mainConfiguration,
};
