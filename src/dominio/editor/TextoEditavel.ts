import { ItemEditavel, IItemEditavel } from './ItemEditavel';

export interface ITextoEditavel extends IItemEditavel {
    getTexto(): string;
    getCategoria(): string;
}

export class TextoEditavel extends ItemEditavel implements ITextoEditavel {
    constructor(
        private categoria: string,
        private texto: string,
        indice: number,
    ) {
        super(indice);
    }

    getTexto() {
        return this.texto;
    }

    getCategoria() {
        return this.categoria;
    }

    toString(): string {
        return `${this.categoria}: ${this.texto}`;
    }
}
