import {
    IItemEditavel,
    ItemEditavel,
    ErroInconsistenciasNaValidacao,
    ErroNaEdicao,
} from '../../../../comum/ItemEditavel';
import { IIdFormulario } from '../../../../../comum/IdFormulario';
import { ITitulo } from '../../../../../comum/Titulo';
import { ITipoVariavel } from './tipo-variavel/TipoVariavel';
import { ITipoVariavelID } from './tipo-variavel/TipoVariavelID';
import { IEscapadorDeVariavel } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavel';
import { IEscapadorDeVariavelFactory } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavelFactory';

export interface IVariavelEditavel extends IItemEditavel {
    getId(): IIdFormulario;
    setId(id: IIdFormulario): void;
    getTitulo(): ITitulo;
    setTitulo(titulo: ITitulo): void;
    getTipo(): ITipoVariavelID;
    setTipo(tipo: ITipoVariavel): void;
    getEscapador(): IEscapadorDeVariavel;
}

export class VariavelEditavel
    extends ItemEditavel
    implements IVariavelEditavel
{
    constructor(
        private id: IIdFormulario,
        private titulo: ITitulo,
        private tipo: ITipoVariavelID,
        indice: number,
        private escapadorFactory: IEscapadorDeVariavelFactory,
    ) {
        super(indice);
        const validacao = this.validar();
        if (!validacao.valido) {
            throw new ErroInconsistenciasNaValidacao(validacao.inconsistencias);
        }
    }

    private validar() {
        const contemId = !!this.id;
        const contemTitulo = !!this.titulo;
        const contemTextoModelo = !!this.tipo;
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
            inconsistencias.push('Não contêm Tipo');
        }
        if (!contemIndice) {
            inconsistencias.push('Não contêm índice');
        }

        return { valido, inconsistencias };
    }

    getId() {
        return this.id;
    }

    setId(id?: IIdFormulario) {
        if (!id) {
            throw new ErroNaEdicao('Id vazio informado');
        }
        this.id = id;
    }

    getTitulo() {
        return this.titulo;
    }

    setTitulo(titulo?: ITitulo) {
        if (!titulo) {
            throw new ErroNaEdicao('Titulo vazio informado');
        }
        this.titulo = titulo;
    }

    getTipo() {
        return this.tipo;
    }

    setTipo(tipo?: ITipoVariavelID) {
        if (!tipo) {
            throw new ErroNaEdicao('Tipo vazio informado');
        }
        this.tipo = tipo;
    }

    toString(): string {
        return `${this.id}: ${this.titulo}`;
    }

    getEscapador() {
        return this.escapadorFactory.criarDeIdFormulario(this.id);
    }
}
