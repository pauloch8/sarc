import { IFormularioEditor } from './FormularioEditor';
import { FormularioEditorDummy } from './FormularioEditor.dubles';
import { IFormularioEditorFactory } from './FormularioEditorFactory';

export class FormularioEditorFactoryDummy implements IFormularioEditorFactory {
    criarDaEspecificacao(): IFormularioEditor {
        return new FormularioEditorDummy();
    }
    criarNovo(): IFormularioEditor {
        throw new FormularioEditorDummy();
    }
}
