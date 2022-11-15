import { Ramificacao } from '../Ramificacao';
import { Texto } from '../Texto';
import { Variavel } from '../Variavel';

export class OpcaoValor {
    constructor(
        private id: string,
        private label: string,
        private ramificacao: Ramificacao,
        private textos?: Texto[],
        private variaveis?: Variavel[],
    ) {}

    getId() {
        return this.id;
    }

    getLabel() {
        return this.label;
    }

    getRamificacoes() {
        return this.ramificacao;
    }

    getVariaveis() {
        return this.variaveis;
    }

    getTextos() {
        if (!this.textos) {
            throw new OpcaoSemTextos(this.getLabel());
        }
        return this.textos.map(texto => texto.getTexto(this.variaveis));
    }
}

export class OpcaoSemTextos extends Error {
    constructor(label: string) {
        super(`A opção ${label} não possui textos`);
    }
}
