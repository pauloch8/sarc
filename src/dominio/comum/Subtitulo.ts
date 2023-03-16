export interface ISubtitulo {
    toString(): string;
}

export class Subtitulo implements ISubtitulo {
    /**
     * Cria um objeto Subtitulo a partir de uma string
     * @param {string} subtitulo subtítulo com três ou mais caracteres
     * @throws {ErroSubtituloEmBranco} se parâmetro for uma string vazia
     * @throws {ErroSubtituloComMenosDeTresCaracteres} se parâmetro for uma string com menos de três caracteres
     */
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
