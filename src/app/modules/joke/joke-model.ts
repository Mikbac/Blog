export class Joke {
    readonly id: string;
    readonly joke: string;
}

export class JokeyNull implements Joke {
    id = '';
    joke = '';
}
