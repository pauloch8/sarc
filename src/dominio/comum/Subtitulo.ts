export interface ISubtitulo {
    toString(): string;
}

export class Subtitulo implements ISubtitulo {
    constructor(private subtitulo: string) {
        this.validar(subtitulo);
    }

    private validar(subtitulo: string) {
        if (!subtitulo) {
            throw new ErroSubtituloEmBranco();
        }
        if (subtitulo.length < 3) {
            throw new ErroSubtituloComMenosDeTresCaracteres();
        }
    }

    toString() {
        return this.subtitulo;
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
