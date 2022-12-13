import { QuestaoSemValorSelecionado } from '../opcoes/QuestaoDeOpcoes';
import { Questao } from '../Questao';
import { ISelecao } from './Selecao';

export class QuestaoDeSelecao extends Questao {
    private valoresSelecionados?: ISelecao[];

    constructor(
        id: string,
        titulo: string,
        tipo: string,
        readonly selecoes: ISelecao[],
        subtitulo?: string,
    ) {
        super(id, titulo, tipo, subtitulo);
    }

    setValoresSelecionado(valores: ISelecao[]) {
        this.valoresSelecionados = valores;
    }

    getValoresSelecionados() {
        return this.valoresSelecionados;
    }

    get irPara() {
        return 'avançar';
    }

    getResposta() {
        if (!this.valoresSelecionados?.length) {
            throw new QuestaoSemValorSelecionado(this.getTitulo());
        }
        const resposta = this.valoresSelecionados.map(valor =>
            valor.getResposta(),
        );
        const retorno = {
            id: this.getId(),
            resposta,
        };
        return retorno;
    }
}
