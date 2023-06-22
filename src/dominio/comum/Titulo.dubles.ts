import { ErroDeCriacaoDeTitulo, ITitulo } from './Titulo';

export class TituloDummy implements ITitulo {}

export class TituloToStringStub implements ITitulo {
    valor = 'dummy';
    toString() {
        return this.valor;
    }
}

export class ErroDeCriacaoDeTituloFake extends ErroDeCriacaoDeTitulo {
    constructor(textoDoErro: string) {
        super(textoDoErro);
    }
}

export class TituloFake implements ITitulo {
    constructor(private titulo: string) {}
    toString(): string {
        return this.titulo;
    }
}
