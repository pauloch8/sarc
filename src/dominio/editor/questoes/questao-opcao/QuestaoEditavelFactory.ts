import { IQuestaoEditavel, QuestaoEditavel } from './QuestaoEditavel';
import { IOpcaoEditavel } from './opcao/OpcaoEditavel';
import { IListaEditavel, ListaEditavel } from '../../comum/ListaEditavel';
import { ITitulo, Titulo } from '../../../comum/Titulo';
import { ISubtitulo, Subtitulo } from '../../../comum/Subtitulo';
import { IdFormulario, IIdFormulario } from '../../../comum/IdFormulario';
import { IEscapadorDeQuestaoFactory } from '@/dominio/comum/escapador/questao/EscapadorDeQuestaoFactory';
import { QuestaoDTO } from '../../../especificacao/EspecificacaoDTO';
import { IOpcaoEditavelFactory } from './opcao/OpcaoEditavelFactory';

export interface IQuestaoEditavelFactory {
    criarDeEspecificacao(
        especificacao: QuestaoDTO,
        indice: number,
    ): IQuestaoEditavel;
    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        indice: number,
        opcoes: IListaEditavel<IOpcaoEditavel>,
        subtitulo: ISubtitulo,
    ): IQuestaoEditavel;
}

export class QuestaoEditavelFactory implements IQuestaoEditavelFactory {
    constructor(
        private escapadorFactory: IEscapadorDeQuestaoFactory,
        private opcaoEditavelFactory: IOpcaoEditavelFactory,
    ) {}

    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        indice: number,
        opcoes: IListaEditavel<IOpcaoEditavel>,
        subtitulo?: ISubtitulo,
    ) {
        return new QuestaoEditavel(
            id,
            titulo,
            indice,
            opcoes,
            this.escapadorFactory,
            subtitulo,
        );
    }

    criarDeEspecificacao(especificacao: QuestaoDTO, indice: number) {
        if (especificacao.tipo === 'opcao') {
            return this.criarQuestaoDeUmaRespostaEditavelPelaEspecificacao(
                especificacao,
                indice,
            );
        } else if (especificacao.tipo === 'selecao') {
            return this.criarQuestaoDeMultiplasRespostaEditavelPelaEspecificacao(
                especificacao,
                indice,
            );
        } else {
            throw new ErroTipoDeEsepecificacaoInvalido(especificacao.tipo);
        }
    }

    private criarQuestaoDeUmaRespostaEditavelPelaEspecificacao(
        especificacao: QuestaoDTO,
        indice: number,
    ) {
        const id = new IdFormulario(especificacao.id);
        const titulo = new Titulo(especificacao.titulo);
        let subtitulo;
        if (especificacao.subtitulo) {
            subtitulo = new Subtitulo(especificacao.subtitulo);
        }
        const itensOpcoes = especificacao.opcoes?.map((item, indice) => {
            return this.opcaoEditavelFactory.criarDeEspecificacao(item, indice);
        });
        const listaOpcoes = new ListaEditavel<IOpcaoEditavel>(itensOpcoes);
        return this.criar(id, titulo, indice, listaOpcoes, subtitulo);
    }

    private criarQuestaoDeMultiplasRespostaEditavelPelaEspecificacao(
        especificacao: QuestaoDTO,
        indice: number,
    ) {
        const id = new IdFormulario(especificacao.id);
        const titulo = new Titulo(especificacao.titulo);
        let subtitulo;
        if (especificacao.subtitulo) {
            subtitulo = new Subtitulo(especificacao.subtitulo);
        }
        const itensOpcoes = especificacao.opcoes?.map((item, indice) => {
            return this.opcaoEditavelFactory.criarDeEspecificacao(item, indice);
        });
        const listaOpcoes = new ListaEditavel<IOpcaoEditavel>(itensOpcoes);
        return this.criar(id, titulo, indice, listaOpcoes, subtitulo);
    }
}

/**
 * Erro de tipo de especificação inválido para a criação de Questão Editável por Especificação
 */
class ErroTipoDeEsepecificacaoInvalido extends Error {
    constructor(tipo: string) {
        super(`Tipo de especificação inválido: "${tipo}"`);
    }
}
