import { RespostaDeQuestao } from '../../respostas/Respostas';
import { Questao } from '../Questao';
import { IOpcao } from './Opcao';

export class QuestaoDeOpcoes extends Questao {
    private valorSelecionado?: IOpcao;

    constructor(
        id: string,
        titulo: string,
        tipo: string,
        readonly opcoes: IOpcao[],
        subtitulo?: string,
    ) {
        super(id, titulo, tipo, subtitulo);
    }

    setValorSelecionado(opcao: IOpcao) {
        this.valorSelecionado = opcao;
    }

    getValorSelecionado() {
        return this.valorSelecionado;
    }

    private get semRamificacao(): boolean {
        return this.opcoes.every(
            opcao => opcao.getRamificacao().irPara === 'avançar',
        );
    }

    get irPara() {
        if (this.semRamificacao) {
            return 'avançar';
        } else {
            if (this.valorSelecionado) {
                return this.valorSelecionado.getRamificacao().irPara;
            }
            return null;
        }
    }

    getResposta() {
        if (!this.valorSelecionado) {
            throw new QuestaoSemValorSelecionado(this.getTitulo());
        }
        const resposta = {
            id: this.getId(),
            resposta: [this.valorSelecionado.getResposta()],
        };
        return resposta;
    }
}

export class QuestaoSemValorSelecionado extends Error {
    constructor(titulo: string) {
        super(`Questão '${titulo}' sem valor selecionado`);
    }
}
