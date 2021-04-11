import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JokeService } from './joke.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('JokeService', () => {
    let service: JokeService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
        });
        service = TestBed.inject(JokeService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
