import { Titulo } from './Titulo';

export interface ITituloFactory {
    criar(titulo: string): Titulo;
}

export class TituloFactory implements ITituloFactory {
    criar(titulo: string) {
        if (!titulo) {
            throw new ErroTituloEmBranco();
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
