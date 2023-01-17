import { IIdFormulario } from '@/dominio/comum/IdFormulario';
import { ITextoModelo } from '@/dominio/comum/TextoModelo';
import { ITitulo } from '@/dominio/comum/Titulo';
import { IModeloEditavel, ModeloEditavel } from './ModeloEditavel';

export interface IModeloEditavelFactory {
    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        textoModelo: ITextoModelo,
        indice: number,
    ): IModeloEditavel;
}

export class ModeloEditavelFactory implements IModeloEditavelFactory {
    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        modeloTemplate: ITextoModelo,
        indice: number,
    ) {
        return new ModeloEditavel(id, titulo, modeloTemplate, indice);
    }
}
