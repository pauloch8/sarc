import { Titulo } from '@/dominio/editor/Titulo';
import {
    ITituloFactory,
    ErroDeCriacaoDeTitulo,
} from '@/dominio/editor/TituloFactory';

export class TituloFactorySucessoStub implements ITituloFactory {
    criar(titulo: string): Titulo {
        return new Titulo(titulo);
    }
}

export class TituloFactoryLancaErroStub implements ITituloFactory {
    erro: ErroDeCriacaoDeTituloFake;

    constructor(textoDoErro: string) {
        this.erro = new ErroDeCriacaoDeTituloFake(textoDoErro);
    }

    criar(): Titulo {
        throw this.erro;
    }
}

export class ErroDeCriacaoDeTituloFake extends ErroDeCriacaoDeTitulo {
    constructor(textoDoErro: string) {
        super(textoDoErro);
    }
}
