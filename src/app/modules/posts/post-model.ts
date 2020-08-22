export interface Post {
    title: string;
    shortDescirption: string;
    description: string;
}

export class PostNull implements Post {
    title = '';
    shortDescirption = '';
    description = '';
}
