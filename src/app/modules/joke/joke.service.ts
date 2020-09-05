import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Joke } from './joke-model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class JokeService {
    private REST_API_ADDRESS = 'https://icanhazdadjoke.com/';

    constructor(private http: HttpClient) {}

    public get joke$(): Observable<Joke> {
        const header = new HttpHeaders({
            Accept: 'application/json',
        });

        const options = {
            headers: header,
        };

        return this.http.get<Joke>(this.REST_API_ADDRESS, options);
    }
}
