import { Timestamp } from '@google-cloud/firestore';

export interface Post {
    id: string;
    title: string;
    category: string[];
    date: Timestamp;
    description: string;
}

export class PostNull implements Post {
    id = '';
    title = '';
    category = [];
    date = null;
    description = '';
}
