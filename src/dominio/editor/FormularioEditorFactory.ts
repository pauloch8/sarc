import { EspecificacaoDTO } from '../especificacao/EspecificacaoDTO';
import { FormularioEditor } from './FormularioEditor';
import { IdFormulario } from './comum/IdFormulario';
import { ListaEditavel } from './ListaEditavel';
import { QuestaoEditavel } from './questoes/questao-opcao/QuestaoEditavel';
import { Subtitulo } from './comum/Subtitulo';
import { Titulo } from './comum/Titulo';

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
