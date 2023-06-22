import { ISubtituloFactory } from './SubtituloFactory';
import { ErroDeCriacaoDeSubtitulo, Subtitulo } from './Subtitulo';
import { SubtituloDummy } from './Subtitulo.dubles';

export class SubtituloFactoryDummy implements ISubtituloFactory {
    criar() {
        return new SubtituloDummy();
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
