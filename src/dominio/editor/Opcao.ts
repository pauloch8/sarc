import { Variavel } from '../formulario/questoes/Variavel';
import { Texto } from '../processamento/processador/texto/Texto';
import { IdFormulario } from './IdFormulario';
import { Titulo } from './Titulo';

export class Opcao {
    constructor(
        private titulo: Titulo,
        private id: IdFormulario,
        private textos: Texto[],
        private variaveis?: Variavel[],
    ) {}

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
}
