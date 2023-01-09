import {
    IdFormulario,
    IIdFormulario,
} from '@/dominio/editor/comum/IdFormulario';
import { ITitulo } from '@/dominio/editor/comum/Titulo';
import { ITextoModelo } from '@/dominio/editor/comum/TextoModelo';
import { ItemEditavel, IItemEditavel } from '../../../ItemEditavel';

export interface ITextoEditavel extends IItemEditavel {
    getId(): IIdFormulario;
    setId(id?: IdFormulario | undefined): void;
    getTitulo(): ITitulo;
    setTitulo(titulo?: ITitulo | undefined): void;
    getTextoModelo(): ITextoModelo;
    setTextoModelo(textoTemplate?: ITextoModelo | undefined): void;
}

export class TextoEditavel extends ItemEditavel implements ITextoEditavel {
    constructor(
        private id: IIdFormulario,
        private titulo: ITitulo,
        private textoModelo: ITextoModelo,
        indice: number,
    ) {
        super(indice);
        const validacao = this.validar();
        if (!validacao.valido) {
            throw new InconsistenciasNaValidacaoDoTexto(
                validacao.inconsistencias,
            );
        }
    }

    private validar() {
        const contemId = !!this.id;
        const contemTitulo = !!this.titulo;
        const contemTextoModelo = !!this.textoModelo;
        const contemIndice = typeof this.getIndice() === 'number';

        const valido =
            contemId && contemTitulo && contemTextoModelo && contemIndice;

        const inconsistencias = [];
        if (!contemId) {
            inconsistencias.push('Não contêm ID');
        }
        if (!contemTitulo) {
            inconsistencias.push('Não contêm Título');
        }
        if (!contemTextoModelo) {
            inconsistencias.push('Não contêm Texto Modelo');
        }
        if (!contemIndice) {
            inconsistencias.push('Não contêm índice');
        }

        return { valido, inconsistencias };
    }

    getId() {
        return this.id;
    }

    setId(id?: IdFormulario) {
        if (!id) {
            throw new ErroNaEdicaoDoTexto('ID vazio informado');
        }
    }

    getTitulo() {
        return this.titulo;
    }

    setTitulo(titulo?: ITitulo) {
        if (!titulo) {
            throw new ErroNaEdicaoDoTexto('Titulo vazio informado');
        }
        this.titulo = titulo;
    }

    getTextoModelo() {
        return this.textoModelo;
    }

    setTextoModelo(textoTemplate?: ITextoModelo) {
        if (!textoTemplate) {
            throw new ErroNaEdicaoDoTexto('TextoTemplate vazio informado');
        }
        this.textoModelo = textoTemplate;
    }

    toString(): string {
        return `${this.id}: ${this.textoModelo.getTextoPlano()}`;
    }
}

export class InconsistenciasNaValidacaoDoTexto extends Error {
    constructor(public readonly inconsistencias: string[]) {
        super(`Texto inválido`);
    }
}

export class ErroNaEdicaoDoTexto extends Error {
    constructor(mensagem: string) {
        super(mensagem);
    }
}
