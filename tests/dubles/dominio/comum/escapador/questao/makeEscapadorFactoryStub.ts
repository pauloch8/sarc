import { IEscapadorDeQuestao } from '@/dominio/comum/escapador/questao/EscapadorDeQuestao';
import { IEscapadorDeQuestaoFactory } from '@/dominio/comum/escapador/questao/EscapadorDeQuestaoFactory';

export function makeEscapadorFactoryStub() {
    const escapadorFactoryStub: IEscapadorDeQuestaoFactory = {
        criarEscapadoresDeTexto(): IEscapadorDeQuestao[] {
            return [];
        },
        criarDeTituloCategoria: function (): IEscapadorDeQuestao {
            throw new Error('Function not implemented.');
        },
    };
    return escapadorFactoryStub;
}
