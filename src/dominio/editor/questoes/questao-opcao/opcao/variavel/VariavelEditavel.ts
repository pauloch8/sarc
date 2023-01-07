import { IdFormulario } from '../../../../comum/IdFormulario';
import { ItemEditavel } from '../../../ItemEditavel';
import { Titulo } from '../../../../comum/Titulo';

export class VariavelEditavel extends ItemEditavel {
    constructor(
        private id: IdFormulario,
        private titulo: Titulo,
        private tipo: string,
        indice: number,
    ) {
        super(indice);
    }

    getId() {
        return this.id;
    }

    setId(id: IdFormulario) {
        if (!id) {
            throw new ErroNaEdicaoDaVariavel('Id vazio informado');
        }
        this.id = id;
    }

    getTitulo() {
        return this.titulo;
    }

    setTitulo(titulo: Titulo) {
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
