import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from './../../../../environments/environment.prod';
import { PostsListComponent } from './posts-list.component';

describe('PostsListComponent', () => {
    let component: PostsListComponent;
    let fixture: ComponentFixture<PostsListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PostsListComponent],
            imports: [AngularFirestoreModule, AngularFireModule.initializeApp(environment.firebase)],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PostsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
