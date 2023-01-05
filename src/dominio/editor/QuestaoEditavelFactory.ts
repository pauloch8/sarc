import { IdFormulario } from './IdFormulario';
import { IQuestaoEditavel, QuestaoEditavel } from './QuestaoEditavel';
import { Subtitulo } from './Subtitulo';
import { Titulo } from './Titulo';

export interface IQuestaoEditavelFactory {
    criar(
        id: IdFormulario,
        titulo: Titulo,
        indice: number,
        subtitulo: Subtitulo,
    ): IQuestaoEditavel;
}

export class QuestaoEditavelFactory implements IQuestaoEditavelFactory {
    criar(
        id: IdFormulario,
        titulo: Titulo,
        indice: number,
        subtitulo: Subtitulo,
    ) {
        return new QuestaoEditavel(id, titulo, indice, subtitulo);
    }
}
