import { Questao } from '@/dominio/formulario/questoes/Questao';
import { RespostaDeQuestao } from '@/dominio/formulario/respostas/Respostas';

export class QuestaoFimDoQuestionarioStub extends Questao {
    irPara = 'fim do formulário';
    getResposta(): RespostaDeQuestao {
        throw new Error('Method not implemented.');
    }
    semRamificacao = false;
}
