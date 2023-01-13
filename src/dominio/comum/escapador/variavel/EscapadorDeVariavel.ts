import { objetoDeValor } from '../../ObjetoDeValor';
import { Escapador } from '../Escapador';
import { NomeDeEscapador } from '../nome/NomeDeEscapador';

export interface IEscapadorDeVariavel {
    getNome(): NomeDeEscapador;
    compararNome(id: string | NomeDeEscapador): boolean;
    toString(): string;
}

@objetoDeValor
export class EscapadorDeVariavel
    extends Escapador
    implements IEscapadorDeVariavel
{
    constructor(private nomeDaVariavel: NomeDeEscapador) {
        super();
    }
    getNome() {
        return this.nomeDaVariavel;
    }
    compararNome(id: string | NomeDeEscapador) {
        return this.nomeDaVariavel.toString() === id.toString();
    }
    toString() {
        return '${' + this.nomeDaVariavel + '}';
    }
}
