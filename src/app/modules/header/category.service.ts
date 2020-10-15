import { Category } from './category-model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
    AngularFirestore,
    DocumentChangeAction,
} from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    private collectionCategory = 'Category';

    constructor(private firestore: AngularFirestore) {}

    get categories$(): Observable<DocumentChangeAction<Category>[]> {
        return this.firestore
            .collection(this.collectionCategory)
            .snapshotChanges()
            .pipe(catchError((error) => of(error)));
    }
}
