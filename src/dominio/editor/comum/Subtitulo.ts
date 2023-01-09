export interface ISubtitulo {
    toString(): string;
}

export class Subtitulo implements ISubtitulo {
    constructor(private subtitulo: string) {}
    toString() {
        return this.subtitulo;
    }
}
