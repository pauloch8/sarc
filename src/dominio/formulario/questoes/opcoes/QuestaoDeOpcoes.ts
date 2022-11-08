import { Questao } from '../Questao';
import { OpcaoDescricao } from './OpcaoDescricao';

export class QuestaoDeOpcoes extends Questao {
    constructor(
        id: string,
        titulo: string,
        tipo: string,
        readonly opcoes: OpcaoDescricao,
        subtitulo?: string,
    ) {
        super(id, titulo, tipo, subtitulo);
    }

    get semRamificacao(): boolean {
        return this.opcoes.valores.every(
            opcao => opcao.tipoRamificacao === 'avancar',
        );
    }
}
