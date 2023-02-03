import { IEscapadorDeQuestao } from '@/dominio/comum/escapador/questao/EscapadorDeQuestao';
import { IEscapadorDeQuestaoFactory } from '@/dominio/comum/escapador/questao/EscapadorDeQuestaoFactory';
import { IIdFormulario } from '@/dominio/comum/IdFormulario';

export function makeEscapadorFactoryStub() {
    const escapadorFactoryStub: IEscapadorDeQuestaoFactory = {
        criarEscapadoresDeTexto(): IEscapadorDeQuestao[] {
            return [];
        },
        criarDeIdQuestaoIdCategoria: function (
            idQuestao: IIdFormulario,
            idCategoria: IIdFormulario,
        ): IEscapadorDeQuestao {
            throw new Error(
                'Function escapadorFactoryStub.criarDeIdQuestaoIdCategoria not implemented.',
            );
        },
    };
    return escapadorFactoryStub;
}
