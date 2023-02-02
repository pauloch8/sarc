import { objetoDeValor } from '../../ObjetoDeValor';
import { Escapador } from '../Escapador';
import { INomeDeEscapador } from '../nome/NomeDeEscapador';

export interface IEscapadorDeVariavel {
    getNome(): INomeDeEscapador;
    compararNome(id: string | INomeDeEscapador): boolean;
    ehIgual(objeto: IEscapadorDeVariavel): boolean;
    toString(): string;
}

@objetoDeValor
export class EscapadorDeVariavel
    extends Escapador
    implements IEscapadorDeVariavel
{
    constructor(private nomeDaVariavel: INomeDeEscapador) {
        super();
    }
    ehIgual(objeto: IEscapadorDeVariavel) {
        return this.toString() === objeto.toString();
    }
    getNome() {
        return this.nomeDaVariavel;
    }
    compararNome(id: string | INomeDeEscapador) {
        return this.nomeDaVariavel.toString() === id.toString();
    }
    toString() {
        return '${' + this.nomeDaVariavel + '}';
    }
}
