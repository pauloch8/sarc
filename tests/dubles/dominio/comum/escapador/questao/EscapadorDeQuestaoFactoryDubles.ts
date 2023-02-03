import { IEscapadorDeQuestao } from '@/dominio/comum/escapador/questao/EscapadorDeQuestao';
import { IEscapadorDeQuestaoFactory } from '@/dominio/comum/escapador/questao/EscapadorDeQuestaoFactory';
import { IIdFormulario } from '@/dominio/comum/IdFormulario';
import { EscapadorDeQuestaoToStringStub } from '../questao/EscapadorDeQuestaoDubles';

export class EscapadorDeQuestaoFactoryCriaDeTituloCategoriaStub
    implements IEscapadorDeQuestaoFactory
{
    criarDeIdQuestaoIdCategoria(
        idQuestao: IIdFormulario,
        idCategoria: IIdFormulario,
    ): IEscapadorDeQuestao {
        return new EscapadorDeQuestaoToStringStub();
    }
    criarDeTituloCategoria(): IEscapadorDeQuestao {
        throw new Error(
            'Method EscapadorDeQuestaoFactoryCriaDeTituloCategoriaStub.criarDeTituloCategoria not implemented.',
        );
    }
    criarEscapadoresDeTexto(): IEscapadorDeQuestao[] {
        throw new Error(
            'Method EscapadorDeQuestaoFactoryCriaDeTituloCategoriaStub.criarEscapadoresDeTexto not implemented.',
        );
    }
}
