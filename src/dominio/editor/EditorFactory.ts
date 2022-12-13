import { EspecificacaoDTO } from '../especificacao/EspecificacaoDTO';
import { Editor } from './Editor';

export class EditorFactory {
    criarDaEspecificacao(especificacao: EspecificacaoDTO): Editor {
        const editor = new Editor(especificacao.titulo);
        return editor;
    }

    criarNovoEditor(): Editor {
        return new Editor();
    }
}
