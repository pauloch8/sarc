import { IEscapadorDeQuestao } from '@/dominio/comum/escapador/questao/EscapadorDeQuestao';
import { makeNomeDeEscapadorFake } from '../nome/makeNomeDeEscapadorFake';

export function makeEscapadorDeQuestaoFake() {
    const nomeDeEscapadorFake = makeNomeDeEscapadorFake();
    const escapadorDeQuestaoFake: IEscapadorDeQuestao = {
        getQuestaoId() {
            return nomeDeEscapadorFake;
        },
        compararQuestao(questaoId: string) {
            return questaoId === 'questao1';
        },
        compararCategoria(categoriaId: string) {
            return categoriaId === 'categoria1';
        },
        toString() {
            return '${questao1.categoria1}';
        },
    };
    return escapadorDeQuestaoFake;
}
