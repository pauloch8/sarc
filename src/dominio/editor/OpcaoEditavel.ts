import { IdFormulario } from './IdFormulario';
import { IItemEditavel, ItemEditavel } from './ItemEditavel';
import { ListaEditavel } from './ListaEditavel';
import { TextoEditavel } from './TextoEditavel';
import { Titulo } from './Titulo';
import { VariavelEditavel } from './VariavelEditavel';

export interface IOpcaoEditavel extends IItemEditavel {
    getTitulo(): Titulo;
    setTitulo(titulo: Titulo): void;
    getId(): IdFormulario;
    setId(id: IdFormulario): void;
    getTextos(): ListaEditavel<TextoEditavel>;
    setTextos(textos: ListaEditavel<TextoEditavel>): void;
    getVariaveis(): ListaEditavel<VariavelEditavel> | undefined;
    setVariaveis(variaveis: ListaEditavel<VariavelEditavel>): void;
}

export class OpcaoEditavel extends ItemEditavel implements IOpcaoEditavel {
    constructor(
        private id: IdFormulario,
        private titulo: Titulo,
        indice: number,
        private textos: ListaEditavel<TextoEditavel>,
        private variaveis?: ListaEditavel<VariavelEditavel>,
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

    setTitulo(titulo: Titulo) {
        if (!titulo) {
            throw new ErroNaEdicaoDaOpcao('Titulo vazio informado');
        }
        this.titulo = titulo;
    }

    getId() {
        return this.id;
    }

    setId(id: IdFormulario) {
        if (!id) {
            throw new ErroNaEdicaoDaOpcao('Id vazio informado');
        }
        this.id = id;
    }

    getTextos() {
        return this.textos;
    }

    setTextos(textos: ListaEditavel<TextoEditavel>) {
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

    setVariaveis(variaveis: ListaEditavel<VariavelEditavel>): void {
        throw new Error('Method not implemented.');
    }

    toString(): string {
        return `Opção id ${this.getId()}`;
    }
}

export class ErroOpcaoInvalida extends Error {
    constructor(public readonly inconsistencias: string[]) {
        super(`Opção inválida`);
    }
}

export class ErroNaEdicaoDaOpcao extends Error {
    constructor(mensagem: string) {
        super(mensagem);
    }
}
