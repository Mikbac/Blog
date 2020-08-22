import { Injectable } from '@angular/core';
import {
    AngularFirestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Post } from './post-model';

@Injectable({
    providedIn: 'root',
})
export class PostService {
    private collectionPost: string = 'Post';

    private _posts: Observable<any[]> = this.firestore
        .collection(this.collectionPost)
        .snapshotChanges();

    constructor(private firestore: AngularFirestore) {}

    get posts$(): Observable<Post[]> {
        return this._posts;
    }
}
