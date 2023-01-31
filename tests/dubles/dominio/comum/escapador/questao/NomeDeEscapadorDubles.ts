import { INomeDeEscapador } from '@/dominio/comum/escapador/nome/NomeDeEscapador';

export class NomeDeEscapadorDummy implements INomeDeEscapador {
    toString(): string {
        return 'dummy';
    }
}
