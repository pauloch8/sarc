import { IdFormulario, IIdFormulario } from '@/dominio/comum/IdFormulario';
import { ITitulo } from '@/dominio/comum/Titulo';
import { ITextoModelo } from '@/dominio/comum/TextoModelo';
import {
    ItemEditavel,
    IItemEditavel,
    ErroNaEdicao,
    ErroInconsistenciasNaValidacao,
} from '../comum/ItemEditavel';

export interface IModeloEditavel extends IItemEditavel {
    getId(): IIdFormulario;
    setId(id?: IdFormulario | undefined): void;
    getTitulo(): ITitulo;
    setTitulo(titulo?: ITitulo | undefined): void;
    getTextoModelo(): ITextoModelo;
    setTextoModelo(modeloModelo?: ITextoModelo | undefined): void;
}

export class ModeloEditavel extends ItemEditavel implements IModeloEditavel {
    constructor(
        private id: IIdFormulario,
        private titulo: ITitulo,
        private textoModelo: ITextoModelo,
        indice: number,
    ) {
        super(indice);
        const validacao = this.validar();
        if (!validacao.valido) {
            throw new InconsistenciasNaValidacaoDoModelo(
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
            inconsistencias.push('Não contêm Modelo Modelo');
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
            throw new ErroNaEdicaoDoModelo('ID vazio informado');
        }
        this.id = id;
    }

    getTitulo() {
        return this.titulo;
    }

    setTitulo(titulo?: ITitulo) {
        if (!titulo) {
            throw new ErroNaEdicaoDoModelo('Titulo vazio informado');
        }
        this.titulo = titulo;
    }

    getTextoModelo() {
        return this.textoModelo;
    }

    setTextoModelo(modeloModelo?: ITextoModelo) {
        if (!modeloModelo) {
            throw new ErroNaEdicaoDoModelo('TextoModelo vazio informado');
        }
        this.textoModelo = modeloModelo;
    }

    toString(): string {
        return `${this.id}: ${this.textoModelo.getTextoPlano()}`;
    }
}

export class InconsistenciasNaValidacaoDoModelo extends ErroInconsistenciasNaValidacao {
    constructor(public readonly inconsistencias: string[]) {
        super(inconsistencias);
    }
}

export class ErroNaEdicaoDoModelo extends ErroNaEdicao {
    constructor(mensagem: string) {
        super(mensagem);
    }
}
