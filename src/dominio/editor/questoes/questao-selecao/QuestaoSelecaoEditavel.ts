import { IIdFormulario } from '../../../comum/IdFormulario';
import {
    IItemEditavel,
    ItemEditavel,
    ErroNaEdicao,
    ErroInconsistenciasNaValidacao,
} from '../../comum/ItemEditavel';
import { IListaEditavel } from '../../comum/ListaEditavel';
import { ISelecaoEditavel } from './selecao/SelecaoEditavel';
import { ISubtitulo } from '../../../comum/Subtitulo';
import { ITitulo } from '../../../comum/Titulo';
import { IEscapadorDeQuestao } from '@/dominio/comum/escapador/questao/EscapadorDeQuestao';
import { IEscapadorDeQuestaoFactory } from '@/dominio/comum/escapador/questao/EscapadorDeQuestaoFactory';
import { QuestaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';

export interface IQuestaoSelecaoEditavel extends IItemEditavel {
    getId(): IIdFormulario;
    setId(id: IIdFormulario): void;
    getTitulo(): ITitulo;
    setTitulo(titulo: ITitulo): void;
    getSubtitulo(): ISubtitulo | undefined;
    setSubtitulo(subtitulo?: ISubtitulo | undefined): void;
    getListaOpcoes(): IListaEditavel<ISelecaoEditavel> | undefined;
    setListaOpcoes(opcoes: IListaEditavel<ISelecaoEditavel>): void;
    getEscapadores(): IEscapadorDeQuestao[];
    gerarEspecificacao(): QuestaoDTO;
}

/**
 * Questão de um editor de formulário
 */
export class QuestaoSelecaoEditavel
    extends ItemEditavel
    implements IQuestaoSelecaoEditavel
{
    public readonly tipo = 'selecao';

    constructor(
        private id: IIdFormulario,
        private titulo: ITitulo,
        indice: number,
        private listaOpcoes: IListaEditavel<ISelecaoEditavel>,
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

    getSubtitulo() {
        return this.subtitulo;
    }

    setSubtitulo(subtitulo?: ISubtitulo) {
        this.subtitulo = subtitulo;
    }

    getListaOpcoes() {
        return this.listaOpcoes;
    }

    setListaOpcoes(opcoes: IListaEditavel<ISelecaoEditavel>) {
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
        const categorias = Array.from(
            new Set(
                this.listaOpcoes
                    .getItens()
                    .map(opcao => opcao.getIdCategorias())
                    .flat(1),
            ),
        );
        const escapadores = categorias.map(categoria => {
            return this.escapadorFactory.criarDeIdQuestaoIdCategoria(
                this.id,
                categoria,
            );
        });
        const escapadoresUnicos = Array.from(new Set(escapadores));
        return escapadoresUnicos;
    }

    // TODO: fazer o editor do valor padrão

    gerarEspecificacao() {
        const opcoes = this.listaOpcoes
            .getItens()
            .map(item => item.gerarEspecificacao());
        const retorno: QuestaoDTO = {
            id: this.id.toString(),
            tipo: this.tipo,
            titulo: this.titulo.toString(),
            subtitulo: this.subtitulo?.toString(),
            opcoes,
        };
        return retorno;
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
