import { Variavel } from '../formulario/questoes/Variavel';
import { Texto } from '../processamento/processador/texto/Texto';
import { IdFormulario } from './IdFormulario';
import { ItemEditavel } from './ItemEditavel';
import { Titulo } from './Titulo';

export class Opcao extends ItemEditavel {
    constructor(
        private titulo: Titulo,
        private id: IdFormulario,
        private textos: Texto[],
        indice: number,
        private variaveis?: Variavel[],
    ) {
        super(indice);
    }

    getTitulo() {
        return this.titulo;
    }

    getId() {
        return this.id;
    }

    getTextos() {
        return this.textos;
    }
    getVariaveis() {
        return this.variaveis;
    }

    toString(): string {
        return `Opção id ${this.getId()}`;
    }
}
