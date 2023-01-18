import { IEscapadorDeQuestao } from '@/dominio/comum/escapador/questao/EscapadorDeQuestao';
import { IEscapadorDeQuestaoFactory } from '@/dominio/comum/escapador/questao/EscapadorDeQuestaoFactory';
import { EscapadorDeQuestaoToStringStub } from '../questao/EscapadorDeQuestaoDubles';

export class EscapadorDeQuestaoFactoryCriaDeTituloCategoriaStub
    implements IEscapadorDeQuestaoFactory
{
    criarDeTituloCategoria(): IEscapadorDeQuestao {
        return new EscapadorDeQuestaoToStringStub();
    }
    criarEscapadoresDeTexto(): IEscapadorDeQuestao[] {
        throw new Error(
            'Method EscapadorDeQuestaoFactoryCriaDeTituloCategoriaStub.criarEscapadoresDeTexto not implemented.',
        );
    }
}
