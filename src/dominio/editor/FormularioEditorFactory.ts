import { EspecificacaoDTO } from '../especificacao/EspecificacaoDTO';
import { FormularioEditor } from './FormularioEditor';
import { IdFormulario } from './IdFormulario';
import { ListaEditavel } from './ListaEditavel';
import { QuestaoEditavel } from './QuestaoEditavel';
import { Subtitulo } from './Subtitulo';
import { Titulo } from './Titulo';

export class FormularioEditorFactory {
    criarDaEspecificacao(especificacao: EspecificacaoDTO): FormularioEditor {
        // TODO: reatribuir indices incorretos
        throw 9;
    }

    criarNovo(id: IdFormulario, titulo: Titulo, subtitulo?: Subtitulo) {
        const questoes = new ListaEditavel<QuestaoEditavel>();
        const formulario = new FormularioEditor(
            id,
            titulo,
            questoes,
            subtitulo,
        );
        return formulario;
    }
}
