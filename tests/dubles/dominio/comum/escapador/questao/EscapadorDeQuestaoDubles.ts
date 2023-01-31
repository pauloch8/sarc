import { IEscapadorDeQuestao } from '@/dominio/comum/escapador/questao/EscapadorDeQuestao';
import { INomeDeEscapador } from '@/dominio/comum/escapador/nome/NomeDeEscapador';
import { NomeDeEscapadorDummy } from './NomeDeEscapadorDubles';

export class EscapadorDeQuestaoDummy implements IEscapadorDeQuestao {
    private nome = new NomeDeEscapadorDummy();

    getQuestaoId(): INomeDeEscapador {
        return new NomeDeEscapadorDummy();
    }
    compararQuestao(questaoId: string | INomeDeEscapador): boolean {
        return true;
    }
    compararCategoria(categoriaId: string | INomeDeEscapador): boolean {
        return true;
    }
    toString(): string {
        return 'dummy';
    }
}

export class EscapadorDeQuestaoToStringStub implements IEscapadorDeQuestao {
    string = 'stub';

    toString(): string {
        return this.string;
    }

    getQuestaoId(): INomeDeEscapador {
        throw new Error(
            'Method EscapadorDeQuestaoToStringStub.getQuestaoId not implemented.',
        );
    }
    compararQuestao(): boolean {
        throw new Error(
            'Method EscapadorDeQuestaoToStringStub.compararQuestao not implemented.',
        );
    }
    compararCategoria(): boolean {
        throw new Error(
            'Method EscapadorDeQuestaoToStringStub.compararCategoria not implemented.',
        );
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
