import { Subtitulo } from './Subtitulo';

export interface ISubtituloFactory {
    criar(subtitulo: string): Subtitulo;
}

export class SubtituloFactory implements ISubtituloFactory {
    criar(subtitulo: string) {
        if (!subtitulo) {
            throw new ErroSubtituloEmBranco();
        }
        if (subtitulo.length < 3) {
            throw new ErroSubtituloComMenosDeTresCaracteres();
        }
        return new Subtitulo(subtitulo);
    }
}

export abstract class ErroDeCriacaoDeSubtitulo extends Error {
    constructor(mensagem: string) {
        super(mensagem);
    }
}

export class ErroSubtituloEmBranco extends ErroDeCriacaoDeSubtitulo {
    constructor() {
        super('Fornecido um subtitulo em branco');
    }
}
export class ErroSubtituloComMenosDeTresCaracteres extends ErroDeCriacaoDeSubtitulo {
    constructor() {
        super('Fornecido um subtitulo com menos de três caracteres');
    }
}
