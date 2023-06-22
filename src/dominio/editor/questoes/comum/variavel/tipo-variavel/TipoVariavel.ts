import { ITipoVariavelID } from './TipoVariavelID';
import { ITitulo } from '@/dominio/comum/Titulo';

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
