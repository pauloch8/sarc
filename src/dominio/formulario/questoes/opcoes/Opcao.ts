import { Ramificacao } from '../Ramificacao';
import { RespostaDeOpcao } from '../../respostas/Respostas';
import { Variavel } from '../Variavel';

export class Opcao {
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

    getRamificacoes() {
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
