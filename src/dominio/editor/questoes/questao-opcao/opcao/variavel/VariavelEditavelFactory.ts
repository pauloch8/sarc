import { IVariavelEditavel, VariavelEditavel } from './VariavelEditavel';
import { IIdFormulario } from '@/dominio/comum/IdFormulario';
import { ITitulo } from '@/dominio/comum/Titulo';
import { ITipoVariavelID } from './tipo-variavel/TipoVariavelID';

export interface IVariavelEditavelFactory {
    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        tipo: ITipoVariavelID,
        indice: number,
    ): IVariavelEditavel;
}

export class VariavelEditavelFactory implements IVariavelEditavelFactory {
    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        tipo: ITipoVariavelID,
        indice: number,
    ) {
        return new VariavelEditavel(id, titulo, tipo, indice);
    }
}
