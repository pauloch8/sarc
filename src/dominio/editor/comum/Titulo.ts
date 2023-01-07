export class Titulo {
    private titulo: string;

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
