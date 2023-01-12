import { IQuestaoEditavel, QuestaoEditavel } from './QuestaoEditavel';
import { IOpcaoEditavel } from './opcao/OpcaoEditavel';
import { IListaEditavel } from '../ListaEditavel';
import { ITitulo } from '../../../comum/Titulo';
import { ISubtitulo } from '../../../comum/Subtitulo';
import { IIdFormulario } from '../../../comum/IdFormulario';

export interface IQuestaoEditavelFactory {
    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        indice: number,
        opcoes: IListaEditavel<IOpcaoEditavel>,
        subtitulo: ISubtitulo,
    ): IQuestaoEditavel;
}

export class QuestaoEditavelFactory implements IQuestaoEditavelFactory {
    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        indice: number,
        opcoes: IListaEditavel<IOpcaoEditavel>,
        subtitulo?: ISubtitulo,
    ) {
        return new QuestaoEditavel(id, titulo, indice, opcoes, subtitulo);
    }
}
