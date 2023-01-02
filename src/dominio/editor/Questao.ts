import { IdFormulario } from './IdFormulario';
import { Opcao } from './Opcao';
import { Subtitulo } from './Subtitulo';
import { Titulo } from './Titulo';

export class Questao {
    private emEdicao = false;

    constructor(
        private id: IdFormulario,
        private titulo: Titulo,
        private subtitulo: Subtitulo,
        private indice: number,
        private opcoes: Opcao[] = [],
    ) {}

    getId() {
        return this.id;
    }

    getTitulo() {
        return this.titulo;
    }

    getSubTitulo() {
        return this.subtitulo;
    }

    getIndice() {
        return this.indice;
    }

    setIndice(indice: number) {
        this.indice = indice;
    }

    getOpcoes() {
        return this.opcoes;
    }

    getEmEdicao() {
        return this.emEdicao;
    }

    editar() {
        this.emEdicao = true;
    }

    toString() {
        return `Questão índice ${this.indice}`;
    }
}
