export interface Category {
    id: string;
    title: string;
}

export class CategoryNull implements Category {
    id = '';
    title = '';
}
