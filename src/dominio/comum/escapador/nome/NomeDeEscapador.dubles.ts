import { INomeDeEscapador } from './NomeDeEscapador';

export function makeNomeDeEscapadorFake() {
    const nomeDeEscapadorFake = {
        toString() {
            return '';
        },
    };
    return nomeDeEscapadorFake;
}

export class NomeDeEscapadorDummy implements INomeDeEscapador {
    toString(): string {
        return 'dummy';
    }
}
