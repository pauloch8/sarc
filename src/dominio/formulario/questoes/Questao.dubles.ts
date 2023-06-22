import { RespostaDeQuestao } from '../respostas/Respostas';
import { Questao } from './Questao';

export class QuestaoSemRamificacaoStub extends Questao {
    irPara = 'avançar';
    getResposta(): RespostaDeQuestao {
        throw new Error(
            'Method QuestaoSemRamificacaoStub.getResposta not implemented.',
        );
    }
    semRamificacao = true;
}

export class QuestaoComRamificacaoNaoRespondidaStub extends Questao {
    irPara = null;
    getResposta(): RespostaDeQuestao {
        throw new Error(
            'Method QuestaoComRamificacaoNaoRespondidaStub.getResposta not implemented.',
        );
    }
    semRamificacao = false;
}

export class QuestaoComRamificacaoRespondidaStub extends Questao {
    constructor(
        private _irPara: string,
        id: string,
        titulo: string,
        tipo: string,
    ) {
        super(id, titulo, tipo);
    }
    get irPara() {
        return this._irPara;
    }
    getResposta(): RespostaDeQuestao {
        throw new Error(
            'Method QuestaoComRamificacaoRespondidaStub.getResposta not implemented.',
        );
    }
    semRamificacao = false;
}

export class QuestaoFimDoQuestionarioStub extends Questao {
    irPara = 'fim do formulário';
    getResposta(): RespostaDeQuestao {
        throw new Error(
            'Method QuestaoFimDoQuestionarioStub.getResposta not implemented.',
        );
    }
    semRamificacao = false;
}
