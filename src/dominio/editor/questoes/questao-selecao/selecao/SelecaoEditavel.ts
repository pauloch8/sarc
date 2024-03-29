import { IIdFormulario } from '../../../../comum/IdFormulario';
import {
    IItemEditavel,
    ItemEditavel,
    ErroNaEdicao,
    ErroInconsistenciasNaValidacao,
} from '../../../comum/ItemEditavel';
import { IListaEditavel } from '../../../comum/ListaEditavel';
import { ITextoEditavel } from '../../comum/texto/TextoEditavel';
import { ITitulo } from '../../../../comum/Titulo';
import { IVariavelEditavel } from '../../comum/variavel/VariavelEditavel';
import { OpcaoValorDTO } from '@/dominio/especificacao/EspecificacaoDTO';

/**
 * Seleção de uma Questão de múltiplas seleções de respostas
 */
export interface ISelecaoEditavel extends IItemEditavel {
    getTitulo(): ITitulo;
    setTitulo(titulo: ITitulo): void;
    getId(): IIdFormulario;
    setId(id: IIdFormulario): void;
    getTextos(): IListaEditavel<ITextoEditavel>;
    setTextos(textos: IListaEditavel<ITextoEditavel>): void;
    getVariaveis(): IListaEditavel<IVariavelEditavel> | undefined;
    setVariaveis(variaveis: IListaEditavel<IVariavelEditavel>): void;
    getIdCategorias(): IIdFormulario[];
    gerarEspecificacao(): OpcaoValorDTO;
}

/**
 * Seleção de uma Questão de múltiplas seleções de respostas
 */
export class SelecaoEditavel extends ItemEditavel implements ISelecaoEditavel {
    constructor(
        private id: IIdFormulario,
        private titulo: ITitulo,
        indice: number,
        private listaTextos: IListaEditavel<ITextoEditavel>,
        private listaVariaveis?: IListaEditavel<IVariavelEditavel>,
    ) {
        super(indice);
        const validacao = this.validar();
        if (!validacao.valido) {
            throw new ErroInconsistenciasNaValidacaoDaSelecao(
                validacao.inconsistencias,
            );
        }
    }

    private validar() {
        const contemId = !!this.id;
        const contemTitulo = !!this.titulo;
        const contemTextos = !!this.listaTextos;
        const contemIndice = typeof this.getIndice() === 'number';

        const valido = contemId && contemTitulo && contemTextos && contemIndice;

        const inconsistencias = [];
        if (!contemId) {
            inconsistencias.push('Não contêm ID');
        }
        if (!contemTitulo) {
            inconsistencias.push('Não contêm Título');
        }
        if (!contemTextos) {
            inconsistencias.push('Não contêm Lista de Textos');
        }

        if (!contemIndice) {
            inconsistencias.push('Não contêm índice');
        }

        return { valido, inconsistencias };
    }

    getTitulo() {
        return this.titulo;
    }

    setTitulo(titulo: ITitulo) {
        if (!titulo) {
            throw new ErroNaEdicaoDaSelecao('Titulo vazio informado');
        }
        this.titulo = titulo;
    }

    getId() {
        return this.id;
    }

    setId(id: IIdFormulario) {
        if (!id) {
            throw new ErroNaEdicaoDaSelecao('Id vazio informado');
        }
        this.id = id;
    }

    getTextos() {
        return this.listaTextos;
    }

    setTextos(textos: IListaEditavel<ITextoEditavel>) {
        if (!textos) {
            throw new ErroNaEdicaoDaSelecao(
                'Não foi informada lista de textos da opção',
            );
        }
        if (textos.getLength() === 0) {
            throw new ErroNaEdicaoDaSelecao(
                'Informada lista de textos da opção vazia',
            );
        }
        this.listaTextos = textos;
    }

    getVariaveis() {
        return this.listaVariaveis;
    }

    setVariaveis(variaveis: IListaEditavel<IVariavelEditavel>): void {
        if (!variaveis) {
            throw new ErroNaEdicaoDaSelecao(
                'Não foi informada lista de variáveis da opção',
            );
        }
        this.listaVariaveis = variaveis;
    }

    getIdCategorias() {
        return this.listaTextos
            .getItens()
            .map(textoEditavel => textoEditavel.getCategoria());
    }

    gerarEspecificacao() {
        const listaVariaveis = this.listaVariaveis
            ?.getItens()
            .map(item => item.gerarEspecificacao());
        const listaTextos = this.listaTextos
            .getItens()
            .map(item => item.gerarEspecificacao());
        const retorno: OpcaoValorDTO = {
            id: this.id.toString(),
            titulo: this.titulo.toString(),
            listaVariaveis,
            listaTextos,
            ramificacao: {
                irPara: 'avançar',
            },
        };
        return retorno;
    }

    toString(): string {
        return `Opção id ${this.getId()}`;
    }
}

export class ErroInconsistenciasNaValidacaoDaSelecao extends ErroInconsistenciasNaValidacao {
    constructor(public readonly inconsistencias: string[]) {
        super(inconsistencias);
    }
}

export class ErroNaEdicaoDaSelecao extends ErroNaEdicao {
    constructor(mensagem: string) {
        super(mensagem);
    }
}
