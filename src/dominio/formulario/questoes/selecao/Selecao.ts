import { Ramificacao } from '../Ramificacao';
import { RespostaDeOpcao } from '../../respostas/Respostas';
import { Variavel } from '../Variavel';

export interface ISelecao {
    getId(): string;
    getRamificacao(): Ramificacao;
    getResposta(): RespostaDeOpcao;
    getVariaveis(): Variavel[] | undefined;
}

export class Selecao implements ISelecao {
    constructor(
        private id: string,
        private label: string,
        private ramificacao: Ramificacao,
        private variaveis?: Variavel[],
    ) {}

    getId() {
        return this.id;
    }

    getLabel() {
        return this.label;
    }

    getRamificacao() {
        return this.ramificacao;
    }

    getVariaveis() {
        return this.variaveis;
    }

    getResposta() {
        const resposta: RespostaDeOpcao = {
            id: this.getId(),
        };
        if (this.variaveis) {
            const variaveis = this.variaveis.map(variavel =>
                variavel.getResposta(),
            );
            resposta.variaveis = variaveis;
        }
        return resposta;
    }
}

export class OpcaoSemTextos extends Error {
    constructor(label: string) {
        super(`A opção ${label} não possui textos`);
    }
}
