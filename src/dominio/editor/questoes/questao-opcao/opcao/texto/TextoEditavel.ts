import { IdFormulario, IIdFormulario } from '@/dominio/comum/IdFormulario';
import { ITitulo } from '@/dominio/comum/Titulo';
import { ITextoModelo } from '@/dominio/comum/TextoModelo';
import {
    ItemEditavel,
    IItemEditavel,
    ErroNaEdicao,
    ErroInconsistenciasNaValidacao,
} from '../../../../comum/ItemEditavel';

export interface ITextoEditavel extends IItemEditavel {
    getId(): IIdFormulario;
    setId(id?: IdFormulario | undefined): void;
    getCategoria(): ITitulo;
    setCategoria(titulo?: ITitulo | undefined): void;
    getTextoModelo(): ITextoModelo;
    setTextoModelo(textoModelo?: ITextoModelo | undefined): void;
}

export class TextoEditavel extends ItemEditavel implements ITextoEditavel {
    constructor(
        private id: IIdFormulario,
        private categoria: ITitulo,
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
        const contemCategoria = !!this.categoria;
        const contemTextoModelo = !!this.textoModelo;
        const contemIndice = typeof this.getIndice() === 'number';

        const valido =
            contemId && contemCategoria && contemTextoModelo && contemIndice;

        const inconsistencias = [];
        if (!contemId) {
            inconsistencias.push('Não contém ID');
        }
        if (!contemCategoria) {
            inconsistencias.push('Não contém Categoria');
        }
        if (!contemTextoModelo) {
            inconsistencias.push('Não contém Texto Modelo');
        }
        if (!contemIndice) {
            inconsistencias.push('Não contém índice');
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
        this.id = id;
    }

    getCategoria() {
        return this.categoria;
    }

    setCategoria(categoria?: ITitulo) {
        if (!categoria) {
            throw new ErroNaEdicaoDoTexto('Categoria vazia informada');
        }
        this.categoria = categoria;
    }

    getTextoModelo() {
        return this.textoModelo;
    }

    setTextoModelo(textoModelo?: ITextoModelo) {
        if (!textoModelo) {
            throw new ErroNaEdicaoDoTexto('TextoModelo vazio informado');
        }
        this.textoModelo = textoModelo;
    }

    toString(): string {
        return `${this.categoria}: ${this.textoModelo.getTextoPlano()}`;
    }
}

export class InconsistenciasNaValidacaoDoTexto extends ErroInconsistenciasNaValidacao {
    constructor(public readonly inconsistencias: string[]) {
        super(inconsistencias);
    }
}

export class ErroNaEdicaoDoTexto extends ErroNaEdicao {
    constructor(mensagem: string) {
        super(mensagem);
    }
}
