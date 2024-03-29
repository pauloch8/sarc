import {
    IQuestaoOpcaoEditavel,
    QuestaoOpcaoEditavel,
} from './QuestaoOpcaoEditavel';
import { IOpcaoEditavel } from './opcao/OpcaoEditavel';
import { IListaEditavel, ListaEditavel } from '../../comum/ListaEditavel';
import { ITitulo, Titulo } from '../../../comum/Titulo';
import { ISubtitulo, Subtitulo } from '../../../comum/Subtitulo';
import { IdFormulario, IIdFormulario } from '../../../comum/IdFormulario';
import { IEscapadorDeQuestaoFactory } from '@/dominio/comum/escapador/questao/EscapadorDeQuestaoFactory';
import { QuestaoDTO } from '../../../especificacao/EspecificacaoDTO';
import { IOpcaoEditavelFactory } from './opcao/OpcaoEditavelFactory';

export interface IQuestaoOpcaoEditavelFactory {
    criarDeEspecificacao(
        especificacao: QuestaoDTO,
        indice: number,
    ): IQuestaoOpcaoEditavel;
    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        indice: number,
        opcoes: IListaEditavel<IOpcaoEditavel>,
        subtitulo: ISubtitulo,
        valorPadrao: IdFormulario,
    ): IQuestaoOpcaoEditavel;
}

export class QuestaoOpcaoEditavelFactory
    implements IQuestaoOpcaoEditavelFactory
{
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
        valorPadrao?: IdFormulario,
    ) {
        return new QuestaoOpcaoEditavel(
            id,
            titulo,
            indice,
            opcoes,
            this.escapadorFactory,
            subtitulo,
            valorPadrao,
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
        const listaOpcoes = new ListaEditavel<IOpcaoEditavel>(itensOpcoes);
        let valorPadrao;
        if (especificacao.valorPadrao) {
            valorPadrao = new IdFormulario(especificacao.valorPadrao);
        }
        return this.criar(
            id,
            titulo,
            indice,
            listaOpcoes,
            subtitulo,
            valorPadrao,
        );
    }
}
