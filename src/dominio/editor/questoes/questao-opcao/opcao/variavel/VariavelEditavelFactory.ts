import { IVariavelEditavel, VariavelEditavel } from './VariavelEditavel';
import { IIdFormulario } from '@/dominio/comum/IdFormulario';
import { ITitulo } from '@/dominio/comum/Titulo';
import { ITipoVariavelID } from './tipo-variavel/TipoVariavelID';
import { IEscapadorDeVariavelFactory } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavelFactory';

export interface IVariavelEditavelFactory {
    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        tipo: ITipoVariavelID,
        indice: number,
    ): IVariavelEditavel;
}

export class VariavelEditavelFactory implements IVariavelEditavelFactory {
    constructor(private escapadorFactory: IEscapadorDeVariavelFactory) {}

    criar(
        id: IIdFormulario,
        titulo: ITitulo,
        tipo: ITipoVariavelID,
        indice: number,
    ) {
        return new VariavelEditavel(
            id,
            titulo,
            tipo,
            indice,
            this.escapadorFactory,
        );
    }
}
