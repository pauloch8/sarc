import { ITextoModelo } from './TextoModelo';
import { IEscapadorDeVariavel } from './escapador/variavel/EscapadorDeVariavel';
import { EscapadorDeVariavelDummy } from './escapador/variavel/EscapadorDeVariavel.dubles';

export class TextoModeloDummy implements ITextoModelo {
    escapadores = [new EscapadorDeVariavelDummy()];

    getEscapadores(): IEscapadorDeVariavel[] {
        return this.escapadores;
    }
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

export class TextoModeloRetornaEscapadoresInjetadosStub
    implements ITextoModelo
{
    constructor(private escapadores: IEscapadorDeVariavel[]) {}

    getEscapadores(): IEscapadorDeVariavel[] {
        return this.escapadores;
    }
    getTextoHtml(): string {
        throw new Error(
            'Method TextoModeloRetornaEscapadoresInjetadosStub.getTextoHtml not implemented.',
        );
    }
    getTextoPlano(): string {
        throw new Error(
            'Method TextoModeloRetornaEscapadoresInjetadosStub.getTextoPlano not implemented.',
        );
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
    getEscapadores(): IEscapadorDeVariavel[] {
        throw new Error(
            'Method TextoModeloRetornaTextosStub.getEscapadores not implemented.',
        );
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
    getEscapadores(): IEscapadorDeVariavel[] {
        throw new Error(
            'Method TextoModeloFake.getEscapadores not implemented.',
        );
    }
}
