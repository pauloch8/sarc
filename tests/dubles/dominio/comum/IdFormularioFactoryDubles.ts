import { IdFormulario } from '@/dominio/comum/IdFormulario';
import { IIdFormularioFactory } from '@/dominio/comum/IdFormularioFactory';
import { IdFormularioDummy } from './IdFormularioDubles';

export class IdFormularioFactoryDummy implements IIdFormularioFactory {
    criarDeString() {
        return new IdFormularioDummy();
    }
    criarDeTitulo() {
        return new IdFormularioDummy();
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
