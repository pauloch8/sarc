import { IdFormulario } from '@/dominio/editor/IdFormulario';
import { IIdFormularioFactory } from '@/dominio/editor/IdFormularioFactory';

export class IdFormularioFactorySucessoDummy implements IIdFormularioFactory {
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