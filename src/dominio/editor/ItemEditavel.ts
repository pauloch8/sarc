export interface IItemEditavel {
    getEmEdicao(): boolean;
    editar(): void;
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

    getIndice() {
        return this.indice;
    }

    setIndice(indice: number) {
        this.indice = indice;
    }

    abstract toString(): string;
}
