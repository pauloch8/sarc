import { IIdFormulario } from '../../comum/IdFormulario';
import { IItemEditavel, ItemEditavel } from '../ItemEditavel';
import { IListaEditavel } from '../ListaEditavel';
import { IOpcaoEditavel } from './opcao/OpcaoEditavel';
import { ISubtitulo } from '../../comum/Subtitulo';
import { ITitulo } from '../../comum/Titulo';

export interface IQuestaoEditavel extends IItemEditavel {
    getId(): IIdFormulario;
    setId(id: IIdFormulario): void;
    getTitulo(): ITitulo;
    setTitulo(titulo: ITitulo): void;
    getSubTitulo(): ISubtitulo | undefined;
    setSubtitulo(subtitulo?: ISubtitulo | undefined): void;
    getOpcoes(): IListaEditavel<IOpcaoEditavel> | undefined;
    setOpcoes(opcoes: IListaEditavel<IOpcaoEditavel>): void;
}

export class QuestaoEditavel extends ItemEditavel implements IQuestaoEditavel {
    constructor(
        private id: IIdFormulario,
        private titulo: ITitulo,
        indice: number,
        private opcoes: IListaEditavel<IOpcaoEditavel>,
        private subtitulo?: ISubtitulo,
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

    setId(id: IIdFormulario) {
        if (!id) {
            throw new ErroNaEdicaoDaQuestao('Id vazio informado');
        }
        this.id = id;
    }

    getTitulo() {
        return this.titulo;
    }

    setTitulo(titulo: ITitulo) {
        if (!titulo) {
            throw new ErroNaEdicaoDaQuestao('Titulo vazio informado');
        }
        this.titulo = titulo;
    }

    getSubTitulo() {
        return this.subtitulo;
    }

    setSubtitulo(subtitulo?: ISubtitulo) {
        this.subtitulo = subtitulo;
    }

    getOpcoes() {
        return this.opcoes;
    }

    setOpcoes(opcoes: IListaEditavel<IOpcaoEditavel>) {
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
