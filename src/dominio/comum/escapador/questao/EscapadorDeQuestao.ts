import { Escapador } from '../Escapador';
import { INomeDeEscapador } from '../nome/NomeDeEscapador';

export interface IEscapadorDeQuestao {
    getQuestaoId(): INomeDeEscapador;
    compararQuestao(questaoId: string | INomeDeEscapador): boolean;
    compararCategoria(categoriaId: string | INomeDeEscapador): boolean;
    toString(): string;
}

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
}
