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
        throw 9;
    }
}
