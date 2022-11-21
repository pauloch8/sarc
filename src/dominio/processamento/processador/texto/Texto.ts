export interface ITexto {
    texto: string;
    categoria: string;
}

export class Texto implements ITexto {
    constructor(private _categoria: string, private _texto: string) {}

    get texto() {
        return this._texto;
    }

    get categoria() {
        return this._categoria;
    }
}
