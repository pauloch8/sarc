import { Questao } from '@/dominio/formulario/questoes/Questao';
import { RespostaDeQuestao } from '@/dominio/formulario/respostas/Respostas';

export class QuestaoComRamificacaoNaoRespondidaStub extends Questao {
    irPara = null;
    getResposta(): RespostaDeQuestao {
        throw new Error(
            'Method QuestaoComRamificacaoNaoRespondidaStub.getResposta not implemented.',
        );
    }
    semRamificacao = false;
}
