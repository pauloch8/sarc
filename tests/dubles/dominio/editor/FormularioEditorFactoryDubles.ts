import { IIdFormulario } from '@/dominio/comum/IdFormulario';
import { ITitulo } from '@/dominio/comum/Titulo';
import { IFormularioEditor } from '@/dominio/editor/FormularioEditor';
import { IFormularioEditorFactory } from '@/dominio/editor/FormularioEditorFactory';
import { IdFormularioDummy } from '../comum/IdFormularioDubles';
import { TituloDummy } from '../comum/TituloDubles';

class FormularioEditorDummy implements IFormularioEditor {
    private id = new IdFormularioDummy();
    private titulo = new TituloDummy();

    getId(): IIdFormulario {
        return this.id;
    }
    getTitulo(): ITitulo {
        return this.titulo;
    }
    setTitulo(titulo: ITitulo): void {
        return;
    }
}

export class FormularioEditorFactoryDummy implements IFormularioEditorFactory {
    criarDaEspecificacao(): IFormularioEditor {
        return new FormularioEditorDummy();
    }
    criarNovo(): IFormularioEditor {
        throw new FormularioEditorDummy();
    }
}
