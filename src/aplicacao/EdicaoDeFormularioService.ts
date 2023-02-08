import { IFormularioEditor } from '@/dominio/editor/FormularioEditor';
import { IFormularioEditorFactory } from '@/dominio/editor/FormularioEditorFactory';
import { IEspecificacaoRepository } from '@/dominio/especificacao/EspecificacaoRepository';

export interface IEdicaoDeFormularioService {
    carregarEditor(id: string): IFormularioEditor;
}

export class EdicaoDeFormularioService implements IEdicaoDeFormularioService {
    constructor(
        private especificacaoRepository: IEspecificacaoRepository,
        private formularioEditorFactory: IFormularioEditorFactory,
    ) {}

    carregarEditor(id: string) {
        const especificacao = this.especificacaoRepository.carregar(id);
        const editor =
            this.formularioEditorFactory.criarDaEspecificacao(especificacao);
        return editor;
    }
}
