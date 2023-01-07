import { IdFormulario } from './comum/IdFormulario';
import { ListaEditavel } from './ListaEditavel';
import { QuestaoEditavel } from './questoes/questao-opcao/QuestaoEditavel';
import { Subtitulo } from './comum/Subtitulo';
import { Titulo } from './comum/Titulo';

export interface IFormularioEditor {
    getId(): IdFormulario;
    getTitulo(): Titulo;
    setTitulo(titulo: Titulo): void;
}

export class FormularioEditor implements IFormularioEditor {
    constructor(
        private id: IdFormulario,
        private titulo: Titulo,
        private listaQuestoes: ListaEditavel<QuestaoEditavel>,
        private subtitulo?: Subtitulo,
    ) {}
    getId(): IdFormulario {
        return this.id;
    }
    setId(id: IdFormulario) {
        this.id = id;
    }
    getTitulo() {
        return this.titulo;
    }
    getSubtitulo() {
        return this.subtitulo;
    }
    setSubtitulo(subtitulo?: Subtitulo) {
        this.subtitulo = subtitulo;
    }
    setTitulo(titulo: Titulo) {
        if (!titulo) {
            throw new ErroTituloEhStringVazia();
        }
        this.titulo = titulo;
    }
    getListaQuestoes() {
        return this.listaQuestoes;
    }
}

export class ErroTituloEhStringVazia extends Error {
    constructor() {
        super('Título não pode ser uma string vazia');
    }
}
