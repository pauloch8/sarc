export class Titulo {
    constructor(private titulo: string) {
        if (!titulo) {
            throw new ErroTituloEmBranco();
        }
    }
}

export class ErroTituloEmBranco extends Error {
    constructor() {
        super('Fornecido um título em branco');
    }
}
