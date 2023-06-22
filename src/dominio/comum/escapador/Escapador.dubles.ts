import { IEscapador } from './Escapador';
import { objetoDeValor } from '../ObjetoDeValor';

@objetoDeValor
export class EscapadorFake implements IEscapador {
    constructor(public escapadorStr: string) {}

    toString(): string {
        return this.escapadorStr;
    }
}

export function criarEscapadoresFake(escapadoresStr: string[]) {
    return escapadoresStr.map(escapadorStr => new EscapadorFake(escapadorStr));
}
