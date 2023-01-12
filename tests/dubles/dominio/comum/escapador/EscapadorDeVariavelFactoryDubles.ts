import { IEscapadorDeVariavel } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavel';
import { IEscapadorDeVariavelFactory } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavelFactory';
import { EscapadorDeVariavelToStringStub } from './EscapadorDeVariavelDubles';

export class EscapadorDeVariavelFactoryCriarDeIdFormularioRetornaToStringStub
    implements IEscapadorDeVariavelFactory
{
    criarEscapadoresDeTexto(): IEscapadorDeVariavel[] {
        throw new Error('Method criarEscapadoresDeTexto not implemented.');
    }
    criarDeIdFormulario(): EscapadorDeVariavelToStringStub {
        return new EscapadorDeVariavelToStringStub();
    }
}

export class EscapadorDeVariavelFactoryDummy
    implements IEscapadorDeVariavelFactory
{
    criarDeIdFormulario(): IEscapadorDeVariavel {
        throw new Error('Method criarDeIdFormulario not implemented.');
    }
    criarEscapadoresDeTexto(): IEscapadorDeVariavel[] {
        throw new Error('Method criarEscapadoresDeTexto not implemented.');
    }
}
