import { RespostaDeVariavel } from '../respostas/Respostas';

export class Variavel {
    private valor = '';

    constructor(
        private id: string,
        private label: string,
        private tipo: string,
    ) {}

    getId() {
        return this.id;
    }

    getLabel() {
        return this.label;
    }

    getTipo() {
        return this.tipo;
    }

    getEscapador() {
        return '${' + this.label + '}';
    }

    setValor(resposta: string) {
        this.valor = resposta;
    }
    getValor() {
        return this.valor;
    }

    getResposta(): RespostaDeVariavel {
        if (!this.valor) {
            throw new RespostaNaoFornecida(this.getLabel());
        }
        const resposta = {
            id: this.id,
            resposta: this.valor,
        };
        return resposta;
    }
}

export class RespostaNaoFornecida extends Error {
    constructor(label: string) {
        super(`Resposta não fornecida para a variável ${label}`);
    }
}
