import { IEscapadorDeVariavelFactory } from './EscapadorDeVariavelFactory';
import { IEscapadorDeVariavel } from './EscapadorDeVariavel';
import { IIdFormulario } from '../../IdFormulario';
import {
    EscapadorDeVariavelToStringStub,
    EscapadorDeVariavelDummy,
} from './EscapadorDeVariavel.dubles';

export class EscapadorDeVariavelFactoryRetornaToStringStub
    implements IEscapadorDeVariavelFactory
{
    criarEscapadoresDeTexto(): IEscapadorDeVariavel[] {
        return [new EscapadorDeVariavelToStringStub()];
    }
    criarDeIdFormulario(): EscapadorDeVariavelToStringStub {
        return new EscapadorDeVariavelToStringStub();
    }
}

export class EscapadorDeVariavelFactoryDummy
    implements IEscapadorDeVariavelFactory
{
    retornoDoMetodoCriarEscapadoresDeTexto = [new EscapadorDeVariavelDummy()];

    criarDeIdFormulario(): IEscapadorDeVariavel {
        return new EscapadorDeVariavelDummy();
    }
    criarEscapadoresDeTexto(): IEscapadorDeVariavel[] {
        return this.retornoDoMetodoCriarEscapadoresDeTexto;
    }
}

/**
 * Stub que faz retornar os escapadores fake recebidos no seu construtor
 */
export class EscapadorDeVariavelFactoryCriarDeTextoRetornaFakeStub
    implements IEscapadorDeVariavelFactory
{
    constructor(private escapadores: IEscapadorDeVariavel[]) {}

    criarDeIdFormulario(id: IIdFormulario): IEscapadorDeVariavel {
        throw new Error(
            'Method EscapadorDeVariavelFactoryRetornaEscapadoresDeTextoFakeStub.criarDeIdFormulario not implemented.',
        );
    }
    criarEscapadoresDeTexto(texto: string): IEscapadorDeVariavel[] {
        return this.escapadores;
    }
}
