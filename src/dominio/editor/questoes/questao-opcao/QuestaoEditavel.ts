import { IIdFormulario } from '../../../comum/IdFormulario';
import {
    IItemEditavel,
    ItemEditavel,
    ErroNaEdicao,
    ErroInconsistenciasNaValidacao,
} from '../../comum/ItemEditavel';
import { IListaEditavel } from '../../comum/ListaEditavel';
import { IOpcaoEditavel } from './opcao/OpcaoEditavel';
import { ISubtitulo } from '../../../comum/Subtitulo';
import { ITitulo } from '../../../comum/Titulo';
import { IEscapadorDeQuestao } from '@/dominio/comum/escapador/questao/EscapadorDeQuestao';
import { IEscapadorDeQuestaoFactory } from '@/dominio/comum/escapador/questao/EscapadorDeQuestaoFactory';

export interface IQuestaoEditavel extends IItemEditavel {
    getId(): IIdFormulario;
    setId(id: IIdFormulario): void;
    getTitulo(): ITitulo;
    setTitulo(titulo: ITitulo): void;
    getSubTitulo(): ISubtitulo | undefined;
    setSubtitulo(subtitulo?: ISubtitulo | undefined): void;
    getListaOpcoes(): IListaEditavel<IOpcaoEditavel> | undefined;
    setListaOpcoes(opcoes: IListaEditavel<IOpcaoEditavel>): void;
    getEscapadores(): IEscapadorDeQuestao[];
}

export class QuestaoEditavel extends ItemEditavel implements IQuestaoEditavel {
    constructor(
        private id: IIdFormulario,
        private titulo: ITitulo,
        indice: number,
        private listaOpcoes: IListaEditavel<IOpcaoEditavel>,
        private escapadorFactory: IEscapadorDeQuestaoFactory,
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
        const contemOpcoes = !!this.listaOpcoes;
        const opcoesContemItens = !!this.listaOpcoes.getLength();
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

    getListaOpcoes() {
        return this.listaOpcoes;
    }

    setListaOpcoes(opcoes: IListaEditavel<IOpcaoEditavel>) {
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
        this.listaOpcoes = opcoes;
    }

    getEscapadores(): IEscapadorDeQuestao[] {
        const categorias = this.listaOpcoes
            .getItens()
            .map(opcao => opcao.getCategorias());
        const escapadores = categorias.map(categoria =>
            this.escapadorFactory.criarDeTituloCategoria(
                this.titulo,
                categoria,
            ),
        );
        return escapadores;
    }

    toString() {
        return `Questão id ${this.getId()}`;
    }
}

export class ErroQuestaoInvalida extends ErroInconsistenciasNaValidacao {
    constructor(public readonly inconsistencias: string[]) {
        super(inconsistencias);
    }
}

export class ErroNaEdicaoDaQuestao extends ErroNaEdicao {
    constructor(mensagem: string) {
        super(mensagem);
    }
}
