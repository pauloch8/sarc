import {
    IQuestaoSelecaoEditavel,
    QuestaoSelecaoEditavel,
} from './QuestaoSelecaoEditavel';
import { ISelecaoEditavel } from './selecao/SelecaoEditavel';
import { IListaEditavel, ListaEditavel } from '../../comum/ListaEditavel';
import { ITitulo, Titulo } from '../../../comum/Titulo';
import { ISubtitulo, Subtitulo } from '../../../comum/Subtitulo';
import { IdFormulario, IIdFormulario } from '../../../comum/IdFormulario';
import { IEscapadorDeQuestaoFactory } from '@/dominio/comum/escapador/questao/EscapadorDeQuestaoFactory';
import { QuestaoDTO } from '../../../especificacao/EspecificacaoDTO';
import { ISelecaoEditavelFactory } from './selecao/SelecaoEditavelFactory';

export interface IQuestaoSelecaoEditavelFactory {
    criarDeEspecificacao(
        especificacao: QuestaoDTO,
        indice: number,
    ): IQuestaoSelecaoEditavel;
    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        indice: number,
        opcoes: IListaEditavel<ISelecaoEditavel>,
        subtitulo: ISubtitulo,
    ): IQuestaoSelecaoEditavel;
}

export class QuestaoSelecaoEditavelFactory
    implements IQuestaoSelecaoEditavelFactory
{
    constructor(
        private escapadorFactory: IEscapadorDeQuestaoFactory,
        private opcaoEditavelFactory: ISelecaoEditavelFactory,
    ) {}

    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        indice: number,
        opcoes: IListaEditavel<ISelecaoEditavel>,
        subtitulo?: ISubtitulo,
    ) {
        return new QuestaoSelecaoEditavel(
            id,
            titulo,
            indice,
            opcoes,
            this.escapadorFactory,
            subtitulo,
        );
    }

    criarDeEspecificacao(especificacao: QuestaoDTO, indice: number) {
        const id = new IdFormulario(especificacao.id);
        const titulo = new Titulo(especificacao.titulo);
        let subtitulo;
        if (especificacao.subtitulo) {
            subtitulo = new Subtitulo(especificacao.subtitulo);
        }
        const itensOpcoes = especificacao.opcoes?.map((item, indice) => {
            return this.opcaoEditavelFactory.criarDeEspecificacao(item, indice);
        });
        const listaOpcoes = new ListaEditavel<ISelecaoEditavel>(itensOpcoes);
        return this.criar(id, titulo, indice, listaOpcoes, subtitulo);
    }
}
