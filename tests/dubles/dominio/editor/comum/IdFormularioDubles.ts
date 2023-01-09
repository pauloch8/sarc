import { IIdFormulario } from '@/dominio/editor/comum/IdFormulario';

export class IdFormularioDummy implements IIdFormulario {
    toString(): string {
        return 'dummy';
    }
}

export class IdFormularioToStringStub implements IIdFormulario {
    valor = 'id';
    toString() {
        return this.valor;
    }
}
