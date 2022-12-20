import { Questao } from '@/dominio/formulario/questoes/Questao';
import { RespostaDeQuestao } from '@/dominio/formulario/respostas/Respostas';

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
        throw new Error('Method not implemented.');
    }
    semRamificacao = false;
}
