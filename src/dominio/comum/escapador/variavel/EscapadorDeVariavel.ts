import { Escapador } from '../Escapador';
import { NomeDeEscapador } from '../nome/NomeDeEscapador';

export class EscapadorDeVariavel extends Escapador {
    constructor(private nomeDaVariavel: NomeDeEscapador) {
        super();
    }
    getNome(): NomeDeEscapador {
        return this.nomeDaVariavel;
    }
    compararNome(id: string | NomeDeEscapador): unknown {
        return this.nomeDaVariavel.toString() === id.toString();
    }
    toString() {
        return '${' + this.nomeDaVariavel + '}';
    }
}
