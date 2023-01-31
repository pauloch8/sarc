import { ISubtitulo } from '@/dominio/comum/Subtitulo';

export class SubtituloDummy implements ISubtitulo {
    toString(): string {
        return 'dummy';
    }
}
