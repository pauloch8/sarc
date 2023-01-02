export abstract class ItemEditavel {
    private emEdicao = false;

    constructor(private indice: number) {}

    getEmEdicao() {
        return this.emEdicao;
    }

    editar() {
        this.emEdicao = true;
    }

    getIndice() {
        return this.indice;
    }

    setIndice(indice: number) {
        this.indice = indice;
    }

    abstract toString(): string;
}
