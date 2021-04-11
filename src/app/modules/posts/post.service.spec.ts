import { TestBed } from '@angular/core/testing';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from './../../../environments/environment.prod';

import { PostService } from './post.service';

describe('PostService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [AngularFirestoreModule, AngularFireModule.initializeApp(environment.firebase)],
        })
    );

    it('should be created', () => {
        const service: PostService = TestBed.get(PostService);
        expect(service).toBeTruthy();
    });
});
