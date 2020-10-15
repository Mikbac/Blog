import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    constructor(private afStorage: AngularFireStorage) {}

    public getImageUrl(path: string): Observable<string> {
        return this.afStorage.ref(path).getDownloadURL();
    }
}
