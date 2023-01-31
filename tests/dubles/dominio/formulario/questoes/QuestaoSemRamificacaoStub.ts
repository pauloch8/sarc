import { Questao } from '@/dominio/formulario/questoes/Questao';
import { RespostaDeQuestao } from '@/dominio/formulario/respostas/Respostas';

export class QuestaoSemRamificacaoStub extends Questao {
    irPara = 'avançar';
    getResposta(): RespostaDeQuestao {
        throw new Error(
            'Method QuestaoSemRamificacaoStub.getResposta not implemented.',
        );
    }
    semRamificacao = true;
}
