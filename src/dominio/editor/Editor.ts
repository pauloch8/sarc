import { Titulo } from './Titulo';

export class Editor {
    constructor(private titulo?: Titulo) {}

    getTitulo() {
        return this.titulo;
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
