import { RespostaDeVariavel } from '../respostas/Respostas';
export class Variavel {
    public resposta?: string;

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

    getEscapador() {
        return '${' + this.label + '}';
    }

    setResposta(resposta: string) {
        debugger;
        this.resposta = resposta;
    }

    getResposta(): RespostaDeVariavel {
        if (!this.resposta) {
            throw new RespostaNaoFornecida(this.getLabel());
        }
        const resposta = {
            id: this.id,
            resposta: this.resposta,
        };
        return resposta;
    }
}

export class RespostaNaoFornecida extends Error {
    constructor(label: string) {
        super(`Resposta não fornecida para a variável ${label}`);
    }
}
