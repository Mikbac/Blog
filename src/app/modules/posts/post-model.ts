import { Timestamp } from '@google-cloud/firestore';

export interface Post {
    readonly id: string;
    readonly title: string;
    readonly category: string[];
    readonly date: Timestamp;
    readonly description: string;
}

export class PostNull implements Post {
    id = '';
    title = '';
    category = [];
    date = null;
    description = '';
}
