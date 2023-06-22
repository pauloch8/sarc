import { ITituloFactory } from './TituloFactory';
import { Titulo } from './Titulo';
import { TituloDummy, ErroDeCriacaoDeTituloFake } from './Titulo.dubles';

export class TituloFactoryDummy implements ITituloFactory {
    criar() {
        return new TituloDummy();
    }
}

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
