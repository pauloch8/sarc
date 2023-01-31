import { ISubtitulo, Subtitulo } from './Subtitulo';

export interface ISubtituloFactory {
    criar(subtitulo: string): ISubtitulo;
}

export class SubtituloFactory implements ISubtituloFactory {
    criar(subtitulo: string) {
        return new Subtitulo(subtitulo);
    }
}
