export class Joke {
    id: string;
    joke: string;
}

export class JokeyNull implements Joke {
    id = '';
    joke = '';
}
