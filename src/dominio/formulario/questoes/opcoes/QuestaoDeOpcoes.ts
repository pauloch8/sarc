import { Questao } from '../Questao';
import { Texto } from '../Texto';
import { OpcaoValor } from './OpcaoValor';

export class QuestaoDeOpcoes extends Questao {
    private valorSelecionado?: OpcaoValor;

    constructor(
        id: string,
        titulo: string,
        tipo: string,
        readonly opcoes: OpcaoValor[],
        subtitulo?: string,
    ) {
        super(id, titulo, tipo, subtitulo);
    }

    get semRamificacao(): boolean {
        return this.opcoes.every(
            opcao => opcao.getRamificacoes().irPara === 'avançar',
        );
    }

    selecionarOpcao(opcao: OpcaoValor) {
        this.valorSelecionado = opcao;
    }

    get opcaoSelecionada(): OpcaoValor | undefined {
        return this.valorSelecionado;
    }

    get irPara(): string | null {
        if (this.semRamificacao) {
            return 'avançar';
        }
        return this.opcaoSelecionada?.getRamificacoes().irPara || null;
    }

    getTextos() {
        if (!this.valorSelecionado) {
            throw new QuestaoSemValorSelecionado(this.getTitulo());
        }
        return this.valorSelecionado.getTextos();
    }
}

export class QuestaoSemValorSelecionado extends Error {
    constructor(titulo: string) {
        super(`Questão '${titulo}' sem valor selecionado`);
    }
}
