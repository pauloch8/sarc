import { IEscapadorDeQuestao } from '@/dominio/comum/escapador/questao/EscapadorDeQuestao';
import { INomeDeEscapador } from '@/dominio/comum/escapador/nome/NomeDeEscapador';

export class EscapadorDeQuestaoToStringStub implements IEscapadorDeQuestao {
    string = 'stub';

    toString(): string {
        return this.string;
    }

    getQuestaoId(): INomeDeEscapador {
        throw new Error('Method not implemented.');
    }
    compararQuestao(): boolean {
        throw new Error('Method not implemented.');
    }
    compararCategoria(): boolean {
        throw new Error('Method not implemented.');
    }
}

export class EscapadorDeQuestaoFake implements IEscapadorDeQuestao {
    categoriaId: string;
    questaoId: string;
    constructor(public numero: string) {
        this.questaoId = 'questao' + numero;
        this.categoriaId = 'categoria' + numero;
    }

    getQuestaoId(): INomeDeEscapador {
        return this.questaoId;
    }
    compararQuestao(questaoId: string | INomeDeEscapador): boolean {
        return questaoId.toString() === this.questaoId;
    }
    compararCategoria(categoriaId: string | INomeDeEscapador): boolean {
        return categoriaId === this.categoriaId;
    }
    toString(): string {
        return '${' + this.questaoId + '.' + this.categoriaId + '}';
    }
}
