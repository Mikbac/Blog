import { JokeService } from './../joke.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-joke',
    templateUrl: './joke.component.html',
})
export class JokeComponent implements OnInit {
    public joke$ = this.jokeService.joke$;

    constructor(private jokeService: JokeService) {}

    ngOnInit(): void {}
}
