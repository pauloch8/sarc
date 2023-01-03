import { IdFormulario } from './IdFormulario';
import { ListaEditavel } from './ListaEditavel';
import { QuestaoEditavel } from './QuestaoEditavel';
import { Subtitulo } from './Subtitulo';
import { Titulo } from './Titulo';

export interface IFormularioEditor {
    getId(): IdFormulario;
    getTitulo(): Titulo;
    setTitulo(titulo: Titulo): void;
}

export class FormularioEditor implements IFormularioEditor {
    constructor(
        private id: IdFormulario,
        private titulo: Titulo,
        private questoes: ListaEditavel<QuestaoEditavel>,
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
    getQuestoes() {
        return this.questoes;
    }
}

export class ErroTituloEhStringVazia extends Error {
    constructor() {
        super('Título não pode ser uma string vazia');
    }
}
