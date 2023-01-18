import { IFormularioEditor } from '@/dominio/editor/FormularioEditor';
import { IFormularioEditorFactory } from '@/dominio/editor/FormularioEditorFactory';

export class FormularioEditorFactoryDummy implements IFormularioEditorFactory {
    criarDaEspecificacao(): IFormularioEditor {
        throw new Error('Method not implemented.');
    }
    criarNovo(): IFormularioEditor {
        throw new Error('Method not implemented.');
    }
}
