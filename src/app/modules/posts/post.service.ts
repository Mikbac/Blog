import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    DocumentChangeAction,
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Post } from './models/post-model';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class PostService {
    private COLLECTION_POST = 'Post';

    constructor(private firestore: AngularFirestore) {}

    get posts$(): Observable<DocumentChangeAction<Post>[]> {
        return this.firestore
            .collection(this.COLLECTION_POST)
            .snapshotChanges()
            .pipe(catchError((error) => of(error)));
    }
}
