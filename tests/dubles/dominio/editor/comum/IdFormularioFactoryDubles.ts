import { IdFormulario } from '@/dominio/editor/comum/IdFormulario';
import { IIdFormularioFactory } from '@/dominio/editor/comum/IdFormularioFactory';

export class IdFormularioFactoryDummy implements IIdFormularioFactory {
    criarDeString(): IdFormulario {
        throw new Error('Method not implemented.');
    }
    criarDeTitulo(): IdFormulario {
        throw new Error('Method not implemented.');
    }
}

export class IdFormularioFactorySucessoStub implements IIdFormularioFactory {
    constructor(private retorno: IdFormulario) {}
    criarDeString(): IdFormulario {
        return this.retorno;
    }
    criarDeTitulo(): IdFormulario {
        return this.retorno;
    }
}
