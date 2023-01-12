import { IIdFormulario } from '../../../comum/IdFormulario';
import {
    IItemEditavel,
    ItemEditavel,
    ErroNaEdicao,
    ErroInconsistenciasNaValidacao,
} from '../../ItemEditavel';
import { IListaEditavel } from '../../ListaEditavel';
import { ITextoEditavel } from './texto/TextoEditavel';
import { ITitulo } from '../../../comum/Titulo';
import { IVariavelEditavel } from './variavel/VariavelEditavel';

export interface IOpcaoEditavel extends IItemEditavel {
    getTitulo(): ITitulo;
    setTitulo(titulo: ITitulo): void;
    getId(): IIdFormulario;
    setId(id: IIdFormulario): void;
    getTextos(): IListaEditavel<ITextoEditavel>;
    setTextos(textos: IListaEditavel<ITextoEditavel>): void;
    getVariaveis(): IListaEditavel<IVariavelEditavel> | undefined;
    setVariaveis(variaveis: IListaEditavel<IVariavelEditavel>): void;
}

export class OpcaoEditavel extends ItemEditavel implements IOpcaoEditavel {
    constructor(
        private id: IIdFormulario,
        private titulo: ITitulo,
        indice: number,
        private textos: IListaEditavel<ITextoEditavel>,
        private variaveis?: IListaEditavel<IVariavelEditavel>,
    ) {
        super(indice);
        const validacao = this.validar();
        if (!validacao.valido) {
            throw new ErroOpcaoInvalida(validacao.inconsistencias);
        }
    }

    private validar() {
        const contemId = !!this.id;
        const contemTitulo = !!this.titulo;
        const contemTextos = !!this.textos;
        const textoContemItens = !!this.textos.getLength();
        const contemIndice = typeof this.getIndice() === 'number';

        const valido =
            contemId &&
            contemTitulo &&
            contemTextos &&
            textoContemItens &&
            contemIndice;

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
        if (!textoContemItens) {
            inconsistencias.push('Não contêm textos');
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
        return this.textos;
    }

    setTextos(textos: IListaEditavel<ITextoEditavel>) {
        if (!textos) {
            throw new ErroNaEdicaoDaOpcao(
                'Não foi informada lista de textos da opção',
            );
        }
        if (textos.getLength() === 0) {
            throw new ErroNaEdicaoDaOpcao(
                'Informada lista de textos da opção vazia',
            );
        }
        this.textos = textos;
    }

    getVariaveis() {
        return this.variaveis;
    }

    setVariaveis(variaveis: IListaEditavel<IVariavelEditavel>): void {
        throw new Error('Method not implemented.');
    }

    toString(): string {
        return `Opção id ${this.getId()}`;
    }
}

export class ErroOpcaoInvalida extends ErroInconsistenciasNaValidacao {
    constructor(public readonly inconsistencias: string[]) {
        super(inconsistencias);
    }
}

export class ErroNaEdicaoDaOpcao extends ErroNaEdicao {
    constructor(mensagem: string) {
        super(mensagem);
    }
}
