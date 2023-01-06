import { IdFormulario } from './IdFormulario';
import { IItemEditavel, ItemEditavel } from './ItemEditavel';
import { ListaEditavel } from './ListaEditavel';
import { OpcaoEditavel } from './OpcaoEditavel';
import { Subtitulo } from './Subtitulo';
import { Titulo } from './Titulo';

export interface IQuestaoEditavel extends IItemEditavel {
    getId(): IdFormulario;
    setId(id: IdFormulario): void;
    getTitulo(): Titulo;
    setTitulo(titulo: Titulo): void;
    getSubTitulo(): Subtitulo | undefined;
    setSubtitulo(subtitulo?: Subtitulo | undefined): void;
    getOpcoes(): ListaEditavel<OpcaoEditavel> | undefined;
    setOpcoes(opcoes: ListaEditavel<OpcaoEditavel>): void;
}

export class QuestaoEditavel extends ItemEditavel implements IQuestaoEditavel {
    constructor(
        private id: IdFormulario,
        private titulo: Titulo,
        indice: number,
        private opcoes: ListaEditavel<OpcaoEditavel>,
        private subtitulo?: Subtitulo,
    ) {
        super(indice);
        const validacao = this.validar();
        if (!validacao.valido) {
            throw new ErroQuestaoInvalida(validacao.inconsistencias);
        }
    }

    private validar() {
        const contemId = !!this.id;
        const contemTitulo = !!this.titulo;
        const contemOpcoes = !!this.opcoes;
        const opcoesContemItens = !!this.opcoes.getLength();
        const contemIndice = typeof this.getIndice() === 'number';

        const valido =
            contemId &&
            contemTitulo &&
            contemOpcoes &&
            opcoesContemItens &&
            contemIndice;

        const inconsistencias = [];
        if (!contemId) {
            inconsistencias.push('Não contêm ID');
        }
        if (!contemTitulo) {
            inconsistencias.push('Não contêm Título');
        }
        if (!contemOpcoes) {
            inconsistencias.push('Não contêm Lista de Opções');
        }
        if (!opcoesContemItens) {
            inconsistencias.push('Não contêm opções');
        }
        if (!contemIndice) {
            inconsistencias.push('Não contêm índice');
        }

        return { valido, inconsistencias };
    }

    getId() {
        return this.id;
    }

    setId(id: IdFormulario) {
        if (!id) {
            throw new ErroNaEdicaoDaQuestao('Id vazio informado');
        }
        this.id = id;
    }

    getTitulo() {
        return this.titulo;
    }

    setTitulo(titulo: Titulo) {
        if (!titulo) {
            throw new ErroNaEdicaoDaQuestao('Titulo vazio informado');
        }
        this.titulo = titulo;
    }

    getSubTitulo() {
        return this.subtitulo;
    }

    setSubtitulo(subtitulo?: Subtitulo) {
        this.subtitulo = subtitulo;
    }

    getOpcoes() {
        return this.opcoes;
    }

    setOpcoes(opcoes: ListaEditavel<OpcaoEditavel>) {
        if (!opcoes) {
            throw new ErroNaEdicaoDaQuestao(
                'Não foi informada lista de opções de questão',
            );
        }
        if (opcoes.getLength() === 0) {
            throw new ErroNaEdicaoDaQuestao(
                'Informada lista de opções de questão vazia',
            );
        }
        this.opcoes = opcoes;
    }

    toString() {
        return `Questão id ${this.getId()}`;
    }
}

export class ErroQuestaoInvalida extends Error {
    constructor(public readonly inconsistencias: string[]) {
        super(`Questão inválida`);
    }
}

export class ErroNaEdicaoDaQuestao extends Error {
    constructor(mensagem: string) {
        super(mensagem);
    }
}
