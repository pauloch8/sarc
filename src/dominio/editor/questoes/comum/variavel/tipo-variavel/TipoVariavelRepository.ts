import { ITipoVariavel } from './TipoVariavel';

export interface TipoVariavelRepository {
    obterTodos(): ITipoVariavel[];
}
