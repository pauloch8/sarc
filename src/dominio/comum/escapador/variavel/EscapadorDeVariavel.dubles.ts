import { IEscapadorDeVariavel } from './EscapadorDeVariavel';
import { NomeDeEscapador } from '../nome/NomeDeEscapador';
import { NomeDeEscapadorDummy } from '../nome/NomeDeEscapador.dubles';

export class EscapadorDeVariavelToStringStub implements IEscapadorDeVariavel {
    string = 'stub';

    toString(): string {
        return this.string;
    }
    getNome(): NomeDeEscapador {
        throw new Error(
            'Method EscapadorDeVariavelToStringStub.getNome not implemented.',
        );
    }
    compararNome(): boolean {
        throw new Error(
            'Method EscapadorDeVariavelToStringStub.compararNome not implemented.',
        );
    }
    ehIgual(objeto: IEscapadorDeVariavel): boolean {
        throw new Error(
            'Method EscapadorDeVariavelToStringStub.ehIgual not implemented.',
        );
    }
}
export class EscapadorDeVariavelDummy implements IEscapadorDeVariavel {
    ehIgual(objeto: IEscapadorDeVariavel): boolean {
        return true;
    }
    getNome() {
        return new NomeDeEscapadorDummy();
    }
    compararNome(): boolean {
        return true;
    }
    toString(): string {
        return 'dummy';
    }
}

export class EscapadorDeVariavelFake implements IEscapadorDeVariavel {
    constructor(public valor: string) {}
    ehIgual(objeto: EscapadorDeVariavelFake): boolean {
        return this.valor === objeto.valor;
    }

    getNome(): NomeDeEscapador {
        throw new Error(
            'Method EscapadorDeVariavelFake.getNome not implemented.',
        );
    }
    compararNome(id: string | NomeDeEscapador): boolean {
        throw new Error(
            'Method EscapadorDeVariavelFake.compararNome not implemented.',
        );
    }
    toString(): string {
        return this.valor;
    }
}

/**
 * Factory function que retorna Escapadores de Variáveis Fake
 */
export function criarEscapadoresDeVariavelFake(escapadoresStr: string[]) {
    const escapadores = escapadoresStr.map(
        escapador => new EscapadorDeVariavelFake(escapador),
    );
    return escapadores;
}
