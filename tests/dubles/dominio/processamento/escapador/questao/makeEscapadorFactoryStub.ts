import { IEscapadorDeQuestao } from '@/dominio/processamento/escapador/questao/EscapadorDeQuestao';
import { IEscapadorDeQuestaoFactory } from '@/dominio/processamento/escapador/questao/EscapadorDeQuestaoFactory';

export function makeEscapadorFactoryStub() {
    const escapadorFactoryStub: IEscapadorDeQuestaoFactory = {
        criarEscapadoresDeTexto(): IEscapadorDeQuestao[] {
            return [];
        },
    };
    return escapadorFactoryStub;
}
