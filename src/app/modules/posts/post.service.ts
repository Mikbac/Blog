import { Timestamp } from '@google-cloud/firestore';
import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
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

    public getOldestPosts(pageSize: number): Observable<DocumentChangeAction<Post>[]> {
        return this.firestore
            .collection(this.COLLECTION_POST, (ref) =>
                ref.orderBy('date', 'desc').limitToLast(pageSize + 1)
            )
            .snapshotChanges()
            .pipe(catchError((error) => of(error)));
    }

    public getLatestPosts$(pageSize: number): Observable<DocumentChangeAction<Post>[]> {
        return this.firestore
            .collection(this.COLLECTION_POST, (ref) => ref.orderBy('date', 'desc').limit(pageSize))
            .snapshotChanges()
            .pipe(catchError((error) => of(error)));
    }

    public getNextPostsPage$(
        olderPost: Timestamp,
        pageSize: number
    ): Observable<DocumentChangeAction<Post>[]> {
        return this.firestore
            .collection(this.COLLECTION_POST, (ref) =>
                ref.orderBy('date', 'desc').startAfter(olderPost).limit(pageSize)
            )
            .snapshotChanges()
            .pipe(catchError((error) => of(error)));
    }

    public getPreviousPostsPage$(
        lastPost: Timestamp,
        pageSize: number
    ): Observable<DocumentChangeAction<Post>[]> {
        return this.firestore
            .collection(this.COLLECTION_POST, (ref) =>
                ref.orderBy('date', 'desc').endBefore(lastPost).limitToLast(pageSize)
            )
            .snapshotChanges()
            .pipe(catchError((error) => of(error)));
    }
}
