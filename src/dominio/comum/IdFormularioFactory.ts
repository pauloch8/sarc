import { IdFormulario, IIdFormulario } from './IdFormulario';
import { Titulo } from './Titulo';
import accents from 'remove-accents';

export interface IIdFormularioFactory {
    criarDeString(texto: string): IIdFormulario;
    criarDeTitulo(titulo: Titulo): IIdFormulario;
}

export class IdFormularioFactory implements IIdFormularioFactory {
    criarDeString(idString: string) {
        return new IdFormulario(idString);
    }
    criarDeTitulo(titulo: Titulo) {
        const tituloStr = titulo.toString();
        const id = accents
            .remove(tituloStr.toLowerCase().replaceAll(' ', '_'))
            .replaceAll(/[^a-z0-9_-]/g, '');
        return new IdFormulario(id);
    }
}
