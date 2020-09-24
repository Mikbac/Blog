import { mainConfiguration } from './configuration/configuration';
import { firebaseConfiguration } from './firebase/firebase';

export const environment = {
    production: false,
    firebase: firebaseConfiguration,
    configuration: mainConfiguration,
};
