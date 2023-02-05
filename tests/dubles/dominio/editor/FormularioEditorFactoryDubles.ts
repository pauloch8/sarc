import { IFormularioEditor } from '@/dominio/editor/FormularioEditor';
import { IFormularioEditorFactory } from '@/dominio/editor/FormularioEditorFactory';
import { FormularioEditorDummy } from '@/tests/dubles/dominio/editor/FormularioEditorDubles';

export class FormularioEditorFactoryDummy implements IFormularioEditorFactory {
    criarDaEspecificacao(): IFormularioEditor {
        return new FormularioEditorDummy();
    }
    criarNovo(): IFormularioEditor {
        throw new FormularioEditorDummy();
    }
}
