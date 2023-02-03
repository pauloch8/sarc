import { objetoDeValor } from '../../ObjetoDeValor';
import { Escapador } from '../Escapador';
import { INomeDeEscapador } from '../nome/NomeDeEscapador';

export interface IEscapadorDeQuestao {
    getQuestaoId(): INomeDeEscapador;
    compararQuestao(questaoId: string | INomeDeEscapador): boolean;
    compararCategoria(categoriaId: string | INomeDeEscapador): boolean;
    toString(): string;
}

@objetoDeValor
export class EscapadorDeQuestao
    extends Escapador
    implements IEscapadorDeQuestao
{
    constructor(
        private questaoId: INomeDeEscapador,
        private categoriaId: INomeDeEscapador,
    ) {
        super();
    }
    getQuestaoId() {
        return this.questaoId;
    }
    compararQuestao(questaoId: string | INomeDeEscapador): boolean {
        return this.questaoId.toString() === questaoId.toString();
    }
    compararCategoria(categoriaId: string | INomeDeEscapador): boolean {
        return this.categoriaId.toString() === categoriaId.toString();
    }
    toString() {
        return '${' + this.questaoId + '.' + this.categoriaId + '}';
    }
    valueOf() {
        return this.toString();
    }
}
