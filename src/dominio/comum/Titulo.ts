export interface ITitulo {
    toString(): string;
}

export class Titulo implements ITitulo {
    private titulo: string;

    /**
     * Cria um objeto do tipo Titulo a partir de uma string. Remove os espaços ao redor (trim) e lança erro se não sobrar uma string com pelo menos três caracteres
     * @param tituloString titulo com três ou mais caracteres
     * @throws {ErroTituloEmBranco} se o parâmetro for uma string vazia
     * @throws {ErroTituloComMenosDeTresCaracteres} se o parâmetro for uma string com menos de três caracteres
     * @throws {ErroTituloComQuebraDeLinha} se o parâmetro for uma string com quebra de linha
     */
    constructor(tituloString: string) {
        this.titulo = tituloString.trim();
        this.validar();
    }

    private validar() {
        if (!this.titulo) {
            throw new ErroTituloEmBranco();
        }
        if (this.titulo.length < 3) {
            throw new ErroTituloComMenosDeTresCaracteres();
        }
        if (/\n/g.test(this.titulo)) {
            throw new ErroTituloComQuebraDeLinha();
        }
    }

    toString() {
        return this.titulo;
    }
}

export abstract class ErroDeCriacaoDeTitulo extends Error {
    constructor(mensagem: string) {
        super(mensagem);
    }
}

export class ErroTituloEmBranco extends ErroDeCriacaoDeTitulo {
    constructor() {
        super('Fornecido um título em branco');
    }
}
export class ErroTituloComMenosDeTresCaracteres extends ErroDeCriacaoDeTitulo {
    constructor() {
        super('Fornecido um com menos de três caracteres');
    }
}
export class ErroTituloComQuebraDeLinha extends ErroDeCriacaoDeTitulo {
    constructor() {
        super('Fornecido um título com quebra de linha');
    }
}
