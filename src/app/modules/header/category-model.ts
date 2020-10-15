export interface Category {
    readonly id: string;
    readonly title: string;
}

export class CategoryNull implements Category {
    id = '';
    title = '';
}
