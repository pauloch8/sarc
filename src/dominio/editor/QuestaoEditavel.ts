import { IdFormulario } from './IdFormulario';
import { ItemEditavel } from './ItemEditavel';
import { ListaEditavel } from './ListaEditavel';
import { Opcao } from './Opcao';
import { Subtitulo } from './Subtitulo';
import { Titulo } from './Titulo';

export class QuestaoEditavel extends ItemEditavel {
    constructor(
        private id: IdFormulario,
        private titulo: Titulo,
        indice: number,
        private subtitulo?: Subtitulo,
        private opcoes?: ListaEditavel<Opcao>,
    ) {
        super(indice);
    }

    getId() {
        return this.id;
    }

    getTitulo() {
        return this.titulo;
    }

    getSubTitulo() {
        return this.subtitulo;
    }

    getOpcoes() {
        return this.opcoes;
    }

    toString() {
        return `Questão id ${this.getId()}`;
    }
}
