import { Category } from './category-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    private collectionCategory = 'Category';

    private _categories: Observable<any[]> = this.firestore
        .collection(this.collectionCategory)
        .snapshotChanges();

    constructor(private firestore: AngularFirestore) {}

    get categories$(): Observable<Category[]> {
        return this._categories;
    }
}
