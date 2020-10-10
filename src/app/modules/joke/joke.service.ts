import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Joke } from './joke-model';
import { Observable } from 'rxjs';
import { ConfigurationService } from 'src/app/services/configuration.service';

@Injectable({
    providedIn: 'root',
})
export class JokeService {
    constructor(private configurationService: ConfigurationService, private http: HttpClient) {}

    public get joke$(): Observable<Joke> {
        const header = new HttpHeaders({
            Accept: 'application/json',
        });

        const options = {
            headers: header,
        };

        return this.http.get<Joke>(this.configurationService.jokeAPIAddress, options);
    }
}
