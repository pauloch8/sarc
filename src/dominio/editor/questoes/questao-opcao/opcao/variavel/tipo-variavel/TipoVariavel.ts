import { ITitulo } from '@/dominio/editor/comum/Titulo';
import { ITipoVariavelID } from './TipoVariavelID';

export interface ITipoVariavel {
    getId(): ITipoVariavelID;
    getTitulo(): ITitulo;
}

export class TipoVariavel implements ITipoVariavel {
    constructor(private id: ITipoVariavelID, private titulo: ITitulo) {}

    getId() {
        return this.id;
    }

    getTitulo() {
        return this.titulo;
    }
}
