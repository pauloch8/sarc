import { EspecificacaoDTO } from '../especificacao/EspecificacaoDTO';
import { FormularioEditor } from './FormularioEditor';
import { IIdFormulario } from '../comum/IdFormulario';
import { ListaEditavel } from './questoes/ListaEditavel';
import { QuestaoEditavel } from './questoes/questao-opcao/QuestaoEditavel';
import { ISubtitulo } from '../comum/Subtitulo';
import { ITitulo } from '../comum/Titulo';

export class FormularioEditorFactory {
    criarDaEspecificacao(especificacao: EspecificacaoDTO): FormularioEditor {
        // TODO: reatribuir indices incorretos
        throw 9;
    }

    criarNovo(id: IIdFormulario, titulo: ITitulo, subtitulo?: ISubtitulo) {
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
