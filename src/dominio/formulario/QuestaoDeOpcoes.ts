import { OpcaoDescricao } from './OpcaoDescricao';
import { Questao } from './Questao';

export class QuestaoDeOpcoes extends Questao {
    constructor(id: string, public opcoes: OpcaoDescricao) {
        super(id);
    }

    get semRamificacao(): boolean {
        return this.opcoes.valores.every(
            opcao => opcao.tipoRamificacao === 'avancar',
        );
    }
}
