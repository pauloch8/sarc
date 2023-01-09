import { ITextoModelo } from '@/dominio/editor/comum/TextoModelo';

export class TextoModeloDummy implements ITextoModelo {
    getTextoHtml(): string {
        throw new Error('Method not implemented.');
    }
    getTextoPlano(): string {
        throw new Error('Method not implemented.');
    }
    toString(): string {
        throw new Error('Method not implemented.');
    }
}

export class TextoModeloRetornaTextosStub implements ITextoModelo {
    textoHtml = 'texto html';
    textoPlano = 'texto html';
    getTextoHtml(): string {
        return this.textoHtml;
    }
    getTextoPlano(): string {
        return this.textoPlano;
    }
    toString(): string {
        return this.textoPlano;
    }
}
