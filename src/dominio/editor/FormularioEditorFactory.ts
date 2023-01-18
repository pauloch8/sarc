import { EspecificacaoDTO } from '../especificacao/EspecificacaoDTO';
import { FormularioEditor, IFormularioEditor } from './FormularioEditor';
import { IIdFormulario } from '../comum/IdFormulario';
import { ListaEditavel } from './comum/ListaEditavel';
import { QuestaoEditavel } from './questoes/questao-opcao/QuestaoEditavel';
import { ISubtitulo } from '../comum/Subtitulo';
import { ITitulo } from '../comum/Titulo';
import { ModeloEditavel } from './modelo/ModeloEditavel';

export interface IFormularioEditorFactory {
    criarDaEspecificacao(especificacao: EspecificacaoDTO): IFormularioEditor;
    criarNovo(
        id: IIdFormulario,
        titulo: ITitulo,
        subtitulo?: ISubtitulo,
    ): IFormularioEditor;
}
export class FormularioEditorFactory implements IFormularioEditorFactory {
    criarDaEspecificacao(especificacao: EspecificacaoDTO): FormularioEditor {
        // TODO: reatribuir indices incorretos
        throw 9;
    }

    criarNovo(id: IIdFormulario, titulo: ITitulo, subtitulo?: ISubtitulo) {
        const listaQuestoes = new ListaEditavel<QuestaoEditavel>();
        const listaModelos = new ListaEditavel<ModeloEditavel>();
        const formulario = new FormularioEditor(
            id,
            titulo,
            listaQuestoes,
            listaModelos,
            subtitulo,
        );
        return formulario;
    }
}
