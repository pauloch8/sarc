import { IdFormulario } from './IdFormulario';
import { Subtitulo } from './Subtitulo';
import { Titulo } from './Titulo';

export interface IEditor {
    getId(): IdFormulario;
    getTitulo(): Titulo;
    setTitulo(titulo: Titulo): void;
}

export class Editor implements IEditor {
    constructor(
        private id: IdFormulario,
        private titulo: Titulo,
        private subtitulo?: Subtitulo,
    ) {}
    getId(): IdFormulario {
        return this.id;
    }
    getTitulo() {
        return this.titulo;
    }
    getSubtitulo() {
        return this.subtitulo;
    }
    setTitulo(titulo: Titulo) {
        if (!titulo) {
            throw new ErroTituloEhStringVazia();
        }
        this.titulo = titulo;
    }
}

export class ErroTituloEhStringVazia extends Error {
    constructor() {
        super('Título não pode ser uma string vazia');
    }
}
