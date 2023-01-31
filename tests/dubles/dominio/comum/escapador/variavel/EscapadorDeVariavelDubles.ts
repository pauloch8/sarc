import { NomeDeEscapador } from '@/dominio/comum/escapador/nome/NomeDeEscapador';
import { IEscapadorDeVariavel } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavel';
import { objetoDeValor } from '@/dominio/comum/ObjetoDeValor';
import { NomeDeEscapadorDummy } from '../questao/NomeDeEscapadorDubles';

export class EscapadorDeVariavelToStringStub implements IEscapadorDeVariavel {
    string = 'stub';

    toString(): string {
        return this.string;
    }

    getNome(): NomeDeEscapador {
        throw new Error('Method getNome not implemented.');
    }
    compararNome(): boolean {
        throw new Error('Method compararNome not implemented.');
    }
}
export class EscapadorDeVariavelDummy implements IEscapadorDeVariavel {
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

    getNome(): NomeDeEscapador {
        throw new Error('Method not implemented.');
    }
    compararNome(id: string | NomeDeEscapador): boolean {
        throw new Error('Method not implemented.');
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
