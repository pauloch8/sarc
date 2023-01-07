import { Titulo } from '@/dominio/editor/comum/Titulo';
import { ITituloFactory } from '@/dominio/editor/comum/TituloFactory';
import { ErroDeCriacaoDeTituloFake } from './TituloDubles';

export class TituloFactoryDummy implements ITituloFactory {
    criar(): Titulo {
        throw new Error('Method not implemented.');
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
