import { IRamificacao, Ramificacao } from './Ramificacao';
import { ITextoEditavel } from '../../comum/texto/TextoEditavel';
import { IVariavelEditavel } from '../../comum/variavel/VariavelEditavel';
import { IListaEditavel } from '../../../comum/ListaEditavel';
import {
    IItemEditavel,
    ItemEditavel,
    ErroNaEdicao,
    ErroInconsistenciasNaValidacao,
} from '../../../comum/ItemEditavel';
import { IIdFormulario } from '../../../../comum/IdFormulario';
import { ITitulo } from '../../../../comum/Titulo';
import { OpcaoValorDTO } from '@/dominio/especificacao/EspecificacaoDTO';

export interface IOpcaoEditavel extends IItemEditavel {
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
    getRamificacao(): IRamificacao;
    setRamificacao(ramificacao: IRamificacao): void;
}

export class OpcaoEditavel extends ItemEditavel implements IOpcaoEditavel {
    private ramificacao: IRamificacao;

    constructor(
        private id: IIdFormulario,
        private titulo: ITitulo,
        indice: number,
        private listaTextos: IListaEditavel<ITextoEditavel>,
        private listaVariaveis?: IListaEditavel<IVariavelEditavel>,
        ramificacao?: IRamificacao,
    ) {
        super(indice);
        if (!ramificacao) {
            ramificacao = new Ramificacao();
        }
        this.ramificacao = ramificacao;
        const validacao = this.validar();
        if (!validacao.valido) {
            throw new ErroInconsistenciasNaValidacaoDaOpcao(
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
            throw new ErroNaEdicaoDaOpcao('Titulo vazio informado');
        }
        this.titulo = titulo;
    }

    getId() {
        return this.id;
    }

    setId(id: IIdFormulario) {
        if (!id) {
            throw new ErroNaEdicaoDaOpcao('Id vazio informado');
        }
        this.id = id;
    }

    getTextos() {
        return this.listaTextos;
    }

    setTextos(textos: IListaEditavel<ITextoEditavel>) {
        if (!textos) {
            throw new ErroNaEdicaoDaOpcao(
                'Não foi informada lista de textos da opção',
            );
        }
        this.listaTextos = textos;
    }

    getVariaveis() {
        return this.listaVariaveis;
    }

    setVariaveis(variaveis: IListaEditavel<IVariavelEditavel>): void {
        if (!variaveis) {
            throw new ErroNaEdicaoDaOpcao(
                'Não foi informada lista de variáveis da opção',
            );
        }
        this.listaVariaveis = variaveis;
    }

    getRamificacao(): IRamificacao {
        return this.ramificacao;
    }

    setRamificacao(ramificacao: IRamificacao): void {
        this.ramificacao = ramificacao;
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

export class ErroInconsistenciasNaValidacaoDaOpcao extends ErroInconsistenciasNaValidacao {
    constructor(public readonly inconsistencias: string[]) {
        super(inconsistencias);
    }
}

export class ErroNaEdicaoDaOpcao extends ErroNaEdicao {
    constructor(mensagem: string) {
        super(mensagem);
    }
}
