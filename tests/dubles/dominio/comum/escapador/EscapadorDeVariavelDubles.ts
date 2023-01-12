import { NomeDeEscapador } from '@/dominio/comum/escapador/nome/NomeDeEscapador';
import { IEscapadorDeVariavel } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavel';

export class EscapadorDeVariavelToStringStub implements IEscapadorDeVariavel {
    static string = 'stub';
    getNome(): NomeDeEscapador {
        throw new Error('Method getNome not implemented.');
    }
    compararNome(): boolean {
        throw new Error('Method compararNome not implemented.');
    }
    toString(): string {
        return EscapadorDeVariavelToStringStub.string;
    }
}
export class EscapadorDeVariavelDummy implements IEscapadorDeVariavel {
    getNome(): NomeDeEscapador {
        throw new Error('Method getNome not implemented.');
    }
    compararNome(): boolean {
        throw new Error('Method compararNome not implemented.');
    }
    toString(): string {
        throw new Error('Method toString not implemented.');
    }
}
