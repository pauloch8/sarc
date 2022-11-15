export class Variavel {
    private resposta?: string;

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
        this.resposta = resposta;
    }

    getResposta() {
        if (!this.resposta) {
            throw new RespostaNaoFornecida(this.getLabel());
        }
        return this.resposta;
    }
}

export class RespostaNaoFornecida extends Error {
    constructor(label: string) {
        super(`Resposta não fornecida para a variável ${label}`);
    }
}
