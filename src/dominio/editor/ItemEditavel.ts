export interface IItemEditavel {
    getEmEdicao(): boolean;
    editar(): void;
    encerrarEdicao(): void;
    getIndice(): number;
    setIndice(indice: number): void;
    toString(): string;
}

export abstract class ItemEditavel implements IItemEditavel {
    private emEdicao = false;

    constructor(private indice: number) {}

    getEmEdicao() {
        return this.emEdicao;
    }

    editar() {
        this.emEdicao = true;
    }

    encerrarEdicao() {
        this.emEdicao = false;
    }

    getIndice() {
        return this.indice;
    }

    setIndice(indice: number) {
        this.indice = indice;
    }

    abstract toString(): string;
}
