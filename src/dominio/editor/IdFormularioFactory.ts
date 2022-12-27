import { IdFormulario } from './IdFormulario';
import { Titulo } from './Titulo';
import accents from 'remove-accents';

export interface IIdFormularioFactory {
    criarDeString(texto: string): IdFormulario;
    criarDeTitulo(titulo: Titulo): IdFormulario;
}

export class IdFormularioFactory implements IIdFormularioFactory {
    criarDeString(idString: string): IdFormulario {
        return new IdFormulario(idString);
    }
    criarDeTitulo(titulo: Titulo): IdFormulario {
        const tituloStr = titulo.toString();
        const id = accents
            .remove(tituloStr.toLowerCase().replaceAll(' ', '_'))
            .replaceAll(/[^a-z0-9_-]/g, '');
        return new IdFormulario(id);
    }
}
