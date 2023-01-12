import { ITipoVariavel } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/tipo-variavel/TipoVariavel';
import { ITipoVariavelFactory } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/tipo-variavel/TipoVariavelFactory';
import { TipoVariavelRepository } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/tipo-variavel/TipoVariavelRepository';

export class TipoVariavelRepositoryEmMemoria implements TipoVariavelRepository {
    private tipos = [
        {
            id: 'data',
            titulo: 'Data',
        },
        {
            id: 'texto',
            titulo: 'Texto',
        },
    ];
    constructor(private factory: ITipoVariavelFactory) {}

    obterTodos(): ITipoVariavel[] {
        return this.tipos.map(tipo => this.factory.criar(tipo.id, tipo.titulo));
    }
}
