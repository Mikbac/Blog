export interface Post {
    id: string;
    title: string;
    category: string[];
    date: Date;
    description: string;
}

export class PostNull implements Post {
    id = '';
    title = '';
    category = [];
    date = null;
    description = '';
}
