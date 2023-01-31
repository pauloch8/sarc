import { IEscapadorDeVariavel } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavel';
import { IEscapadorDeVariavelFactory } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavelFactory';
import { IIdFormulario } from '@/dominio/comum/IdFormulario';
import {
    EscapadorDeVariavelDummy,
    EscapadorDeVariavelToStringStub,
} from './EscapadorDeVariavelDubles';

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
    criarDeIdFormulario(): IEscapadorDeVariavel {
        return new EscapadorDeVariavelDummy();
    }
    criarEscapadoresDeTexto(): IEscapadorDeVariavel[] {
        return [new EscapadorDeVariavelDummy()];
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
