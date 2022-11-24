import { RespostaDeQuestaoDeOpcoes } from '../../respostas/Respostas';
import { Questao } from '../Questao';
import { Opcao } from './Opcao';

export class QuestaoDeOpcoes extends Questao {
    private valorSelecionado?: Opcao;

    constructor(
        id: string,
        titulo: string,
        tipo: string,
        readonly opcoes: Opcao[],
        subtitulo?: string,
    ) {
        super(id, titulo, tipo, subtitulo);
    }

    setValorSelecionado(opcao: Opcao) {
        this.valorSelecionado = opcao;
    }

    getValorSelecionado() {
        return this.valorSelecionado;
    }

    get semRamificacao(): boolean {
        return this.opcoes.every(
            opcao => opcao.getRamificacoes().irPara === 'avançar',
        );
    }

    get irPara(): string | null {
        if (this.semRamificacao) {
            return 'avançar';
        }
        return this.valorSelecionado?.getRamificacoes().irPara || null;
    }

    getResposta(): RespostaDeQuestaoDeOpcoes {
        if (!this.valorSelecionado) {
            throw new QuestaoSemValorSelecionado(this.getTitulo());
        }
        const resposta = {
            id: this.getId(),
            resposta: this.valorSelecionado.getResposta(),
        };
        return resposta;
    }
}

export class QuestaoSemValorSelecionado extends Error {
    constructor(titulo: string) {
        super(`Questão '${titulo}' sem valor selecionado`);
    }
}
