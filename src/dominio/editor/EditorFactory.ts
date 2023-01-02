import { EspecificacaoDTO } from '../especificacao/EspecificacaoDTO';
import { Editor } from './Editor';
import { IIdFormularioFactory } from './IdFormularioFactory';
import { Subtitulo } from './Subtitulo';
import { ISubtituloFactory } from './SubtituloFactory';
import { ITituloFactory } from './TituloFactory';

export class EditorFactory {
    constructor(
        private idFormularioFactory: IIdFormularioFactory,
        private tituloFactory: ITituloFactory,
        private subtituloFactory: ISubtituloFactory,
    ) {}

    criarDaEspecificacao(especificacao: EspecificacaoDTO): Editor {
        // TODO: reatribuir indices incorretos
        const titulo = this.tituloFactory.criar(especificacao.titulo);
        const idFormulario = this.idFormularioFactory.criarDeString(
            especificacao.id,
        );
        let subtitulo: Subtitulo | undefined;
        if (especificacao.subtitulo) {
            subtitulo = this.subtituloFactory.criar(especificacao.subtitulo);
        }
        const editor = new Editor(idFormulario, titulo, subtitulo);
        return editor;
    }
}
