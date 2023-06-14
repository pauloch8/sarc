export interface ITexto {
    texto: string;
    categoria: string;
}

export class Texto implements ITexto {
    constructor(private _categoria: string, private _texto: string) {}

    get texto() {
        const regex = /^(?:<p>)?(?<conteudo>[\s\S]+?)(?:<\/p>)?$/;
        const match = regex.exec(this._texto);
        if (!match?.groups) {
            throw new Error('Erro ao processar o texto');
        }
        const retorno = match.groups.conteudo;
        return retorno;
    }

    get categoria() {
        return this._categoria;
    }
}
