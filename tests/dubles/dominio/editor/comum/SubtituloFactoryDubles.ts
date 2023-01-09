import { Subtitulo } from '@/dominio/editor/comum/Subtitulo';
import {
    ErroDeCriacaoDeSubtitulo,
    ISubtituloFactory,
} from '@/dominio/editor/comum/SubtituloFactory';

export class SubtituloFactoryDummy implements ISubtituloFactory {
    criar(): Subtitulo {
        throw new Error('Method not implemented.');
    }
}

export class ErroDeCriacaoDeSubtituloFake extends ErroDeCriacaoDeSubtitulo {
    constructor(textoDoErro: string) {
        super(textoDoErro);
    }
}

export class SubtituloFactoryErroStub implements ISubtituloFactory {
    constructor(private textoDoErro: string) {}
    criar(): Subtitulo {
        throw new ErroDeCriacaoDeSubtituloFake(this.textoDoErro);
    }
}

export class SubtituloFactorySucessoStub implements ISubtituloFactory {
    criar(subtitulo: string): Subtitulo {
        return new Subtitulo(subtitulo);
    }
}
