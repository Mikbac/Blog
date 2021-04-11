import { TestBed } from '@angular/core/testing';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from './../../../environments/environment.prod';

import { CategoryService } from './category.service';

describe('CategoryService', () => {
    let service: CategoryService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AngularFirestoreModule, AngularFireModule.initializeApp(environment.firebase)],
        });
        service = TestBed.inject(CategoryService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
