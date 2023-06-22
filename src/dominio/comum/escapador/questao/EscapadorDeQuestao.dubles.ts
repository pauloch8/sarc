import { IEscapadorDeQuestao } from './EscapadorDeQuestao';
import { IEscapadorDeQuestaoFactory } from './EscapadorDeQuestaoFactory';
import { INomeDeEscapador } from '../nome/NomeDeEscapador';
import {
    NomeDeEscapadorDummy,
    makeNomeDeEscapadorFake,
} from '../nome/NomeDeEscapador.dubles';
import { IIdFormulario } from '../../IdFormulario';

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

export function makeEscapadorDeQuestaoFake() {
    const nomeDeEscapadorFake = makeNomeDeEscapadorFake();
    const escapadorDeQuestaoFake: IEscapadorDeQuestao = {
        getQuestaoId() {
            return nomeDeEscapadorFake;
        },
        compararQuestao(questaoId: string) {
            return questaoId === 'questao1';
        },
        compararCategoria(categoriaId: string) {
            return categoriaId === 'categoria1';
        },
        toString() {
            return '${questao1.categoria1}';
        },
    };
    return escapadorDeQuestaoFake;
}
export function makeEscapadorFactoryStub() {
    const escapadorFactoryStub: IEscapadorDeQuestaoFactory = {
        criarEscapadoresDeTexto(): IEscapadorDeQuestao[] {
            return [];
        },
        criarDeIdQuestaoIdCategoria: function (
            idQuestao: IIdFormulario,
            idCategoria: IIdFormulario,
        ): IEscapadorDeQuestao {
            throw new Error(
                'Function escapadorFactoryStub.criarDeIdQuestaoIdCategoria not implemented.',
            );
        },
    };
    return escapadorFactoryStub;
}
