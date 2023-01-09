import { IIdFormulario } from '@/dominio/editor/comum/IdFormulario';
import { ITextoModelo } from '@/dominio/editor/comum/TextoModelo';
import { ITitulo } from '@/dominio/editor/comum/Titulo';
import { ITextoEditavel, TextoEditavel } from './TextoEditavel';

export interface ITextoEditavelFactory {
    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        textoTemplate: ITextoModelo,
        indice: number,
    ): ITextoEditavel;
}

export class TextoEditavelFactory implements ITextoEditavelFactory {
    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        textoTemplate: ITextoModelo,
        indice: number,
    ) {
        return new TextoEditavel(id, titulo, textoTemplate, indice);
    }
}
