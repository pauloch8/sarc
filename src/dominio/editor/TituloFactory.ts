import { Titulo } from './Titulo';

export interface ITituloFactory {
    criar(titulo: string): Titulo;
}

export class TituloFactory implements ITituloFactory {
    criar(titulo: string) {
        if (!titulo) {
            throw new ErroTituloEmBranco();
        }
        if (titulo.length < 3) {
            throw new ErroTituloComMenosDeTresCaracteres();
        }
        if (/\n/g.test(titulo)) {
            throw new ErroTituloComQuebraDeLinha();
        }
        return new Titulo(titulo);
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
