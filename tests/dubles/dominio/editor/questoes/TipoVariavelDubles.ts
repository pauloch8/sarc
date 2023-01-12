import { ITitulo } from '@/dominio/comum/Titulo';
import { ITipoVariavel } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/tipo-variavel/TipoVariavel';
import { ITipoVariavelID } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/tipo-variavel/TipoVariavelID';
import { TipoVariavelRepository } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/tipo-variavel/TipoVariavelRepository';
import { TituloFake } from '../../comum/TituloDubles';

export class TipoVariavelIDDummy implements ITipoVariavelID {}

export class TipoVariavelIDFake implements ITipoVariavelID {
    constructor(private id: string) {}
    toString(): string {
        return this.id;
    }
}

export class TipoVariavelDummy implements ITipoVariavel {
    getId(): ITipoVariavelID {
        throw new Error('Method not implemented.');
    }
    getTitulo(): ITitulo {
        throw new Error('Method not implemented.');
    }
}

export class TipoVariavelFake implements ITipoVariavel {
    titulo: TituloFake;
    id: TipoVariavelIDFake;
    constructor(id: string) {
        this.id = new TipoVariavelIDFake(id);
        this.titulo = new TituloFake(id);
    }
    getId(): ITipoVariavelID {
        return this.id;
    }
    getTitulo(): ITitulo {
        return this.titulo;
    }
}

export class TipoVariavelRepositorySucessoStub
    implements TipoVariavelRepository
{
    obterTodos(): ITipoVariavel[] {
        return [
            new TipoVariavelFake('1'),
            new TipoVariavelFake('2'),
            new TipoVariavelFake('3'),
        ];
    }
}
