import { IdFormulario } from './IdFormulario';
import { IItemEditavel, ItemEditavel } from './ItemEditavel';
import { ListaEditavel } from './ListaEditavel';
import { Opcao } from './Opcao';
import { Subtitulo } from './Subtitulo';
import { Titulo } from './Titulo';

export interface IQuestaoEditavel extends IItemEditavel {
    getId(): IdFormulario;
    setId(id: IdFormulario): void;
    getTitulo(): Titulo;
    setTitulo(titulo: Titulo): void;
    getSubTitulo(): Subtitulo | undefined;
    setSubtitulo(subtitulo?: Subtitulo | undefined): void;
    getOpcoes(): ListaEditavel<Opcao> | undefined;
    setOpcoes(opcoes: ListaEditavel<Opcao>): void;
    toString(): string;
}

export class QuestaoEditavel extends ItemEditavel implements IQuestaoEditavel {
    constructor(
        private id: IdFormulario,
        private titulo: Titulo,
        indice: number,
        private subtitulo?: Subtitulo,
        private opcoes?: ListaEditavel<Opcao>,
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
        const opcoesContemItens = !!this.opcoes?.getLength();

        const valido =
            contemId && contemTitulo && contemOpcoes && opcoesContemItens;

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

        return { valido, inconsistencias };
    }

    getId() {
        return this.id;
    }

    setId(id: IdFormulario) {
        if (!id) {
            throw new ErroNaEdicao('Id vazio informado');
        }
        this.id = id;
    }

    getTitulo() {
        return this.titulo;
    }

    setTitulo(titulo: Titulo) {
        if (!titulo) {
            throw new ErroNaEdicao('Titulo vazio informado');
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

    setOpcoes(opcoes: ListaEditavel<Opcao>) {
        if (!opcoes) {
            throw new ErroNaEdicao(
                'Não foi informada lista de opções de questão',
            );
        }
        if (opcoes.getLength() === 0) {
            throw new ErroNaEdicao(
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

export class ErroNaEdicao extends Error {
    constructor(mensagem: string) {
        super(mensagem);
    }
}
