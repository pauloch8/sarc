import { IIdFormularioFactory } from './IdFormularioFactory';
import { IdFormulario } from './IdFormulario';
import { IdFormularioDummy } from './IdFormulario.dubles';

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
