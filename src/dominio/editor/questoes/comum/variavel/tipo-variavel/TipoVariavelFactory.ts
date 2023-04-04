import { ITipoVariavel, TipoVariavel } from './TipoVariavel';
import { ITipoVariavelID } from './TipoVariavelID';
import { ITitulo } from '@/dominio/comum/Titulo';

export interface ITipoVariavelFactory {
    criar(id: ITipoVariavelID, titulo: ITitulo): ITipoVariavel;
}

export class TipoVariavelFactory implements ITipoVariavelFactory {
    criar(id: ITipoVariavelID, titulo: ITitulo) {
        return new TipoVariavel(id, titulo);
    }
}
