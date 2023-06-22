import { ISubtitulo } from './Subtitulo';

export class SubtituloDummy implements ISubtitulo {
    toString(): string {
        return 'dummy';
    }
}
