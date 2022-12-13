export class Editor {
    constructor(private titulo?: string) {}

    getTitulo() {
        return this.titulo;
    }
    setTitulo(titulo: string) {
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
