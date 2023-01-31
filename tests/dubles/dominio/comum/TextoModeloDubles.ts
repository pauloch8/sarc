import { ITextoModelo } from '@/dominio/comum/TextoModelo';

export class TextoModeloDummy implements ITextoModelo {
    getTextoHtml(): string {
        return 'dummy';
    }
    getTextoPlano(): string {
        return 'dummy';
    }
    toString(): string {
        return 'dummy';
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

export class TextoModeloFake implements ITextoModelo {
    constructor(public textoHtml: string, public textoPlano: string) {}
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
