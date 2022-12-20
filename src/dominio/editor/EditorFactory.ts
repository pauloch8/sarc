import { EspecificacaoDTO } from '../especificacao/EspecificacaoDTO';
import { Editor } from './Editor';
import { Titulo } from './Titulo';

export class EditorFactory {
    criarDaEspecificacao(especificacao: EspecificacaoDTO): Editor {
        const titulo = new Titulo(especificacao.titulo);
        const editor = new Editor(titulo);
        return editor;
    }

    criarNovoEditor(): Editor {
        return new Editor();
    }
}
