import { IItemEditavel, ItemEditavel } from '../../../ItemEditavel';
import { IIdFormulario } from '../../../../comum/IdFormulario';
import { ITitulo } from '../../../../comum/Titulo';

export interface IVariavelEditavel extends IItemEditavel {
    getId(): IIdFormulario;
    setId(id: IIdFormulario): void;
    getTitulo(): ITitulo;
    setTitulo(titulo: ITitulo): void;
    getTipo(): ITitulo;
    setTipo(tipo: string): void;
}

export class VariavelEditavel
    extends ItemEditavel
    implements IVariavelEditavel
{
    constructor(
        private id: IIdFormulario,
        private titulo: ITitulo,
        private tipo: string,
        indice: number,
    ) {
        super(indice);
    }

    getId() {
        return this.id;
    }

    setId(id: IIdFormulario) {
        if (!id) {
            throw new ErroNaEdicaoDaVariavel('Id vazio informado');
        }
        this.id = id;
    }

    getTitulo() {
        return this.titulo;
    }

    setTitulo(titulo: ITitulo) {
        if (!titulo) {
            throw new ErroNaEdicaoDaVariavel('Titulo vazio informado');
        }
        this.titulo = titulo;
    }

    getTipo() {
        return this.titulo;
    }

    setTipo(tipo: string) {
        if (!tipo) {
            throw new ErroNaEdicaoDaVariavel('Tipo vazio informado');
        }
        this.tipo = tipo;
    }

    toString(): string {
        return `${this.tipo}: ${this.titulo}`;
    }
}

export class ErroVariavelInvalida extends Error {
    constructor(public readonly inconsistencias: string[]) {
        super(`Variável inválida`);
    }
}

export class ErroNaEdicaoDaVariavel extends Error {
    constructor(mensagem: string) {
        super(mensagem);
    }
}
