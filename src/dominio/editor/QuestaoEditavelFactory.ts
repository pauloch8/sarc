import { IdFormulario } from './IdFormulario';
import { ListaEditavel } from './ListaEditavel';
import { OpcaoEditavel } from './OpcaoEditavel';
import { IQuestaoEditavel, QuestaoEditavel } from './QuestaoEditavel';
import { Subtitulo } from './Subtitulo';
import { Titulo } from './Titulo';

export interface IQuestaoEditavelFactory {
    criar(
        id: IdFormulario,
        titulo: Titulo,
        indice: number,
        opcoes: ListaEditavel<OpcaoEditavel>,
        subtitulo: Subtitulo,
    ): IQuestaoEditavel;
}

export class QuestaoEditavelFactory implements IQuestaoEditavelFactory {
    criar(
        id: IdFormulario,
        titulo: Titulo,
        indice: number,
        opcoes: ListaEditavel<OpcaoEditavel>,
        subtitulo?: Subtitulo,
    ) {
        return new QuestaoEditavel(id, titulo, indice, opcoes, subtitulo);
    }
}
