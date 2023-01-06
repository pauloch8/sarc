import { ItemEditavel } from './ItemEditavel';

export class TextoEditavel extends ItemEditavel {
    constructor(
        private _categoria: string,
        private _texto: string,
        indice: number,
    ) {
        super(indice);
    }

    get texto() {
        return this._texto;
    }

    get categoria() {
        return this._categoria;
    }

    toString(): string {
        return `${this.categoria}: ${this.texto}`;
    }
}
