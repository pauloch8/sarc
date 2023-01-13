import { objetoDeValor } from '../../ObjetoDeValor';

export interface INomeDeEscapador {
    toString(): string;
}

@objetoDeValor
export class NomeDeEscapador {
    static pattern = '[a-zA-Z0-9._-]';
    constructor(private nome: string) {
        this.validar(nome);
    }

    toString() {
        return this.nome;
    }

    private validar(nome: string) {
        const regex = new RegExp('^' + NomeDeEscapador.pattern + '+$');
        const valido = regex.test(nome);
        if (!valido) {
            throw new ErroFornecidoNomeDeVariavelIncorreto(nome);
        }
    }
}

export class ErroFornecidoNomeDeVariavelIncorreto extends Error {
    constructor(nome: string) {
        super(
            `Fornecido um nome de variável incorreto: "${nome}". Os nomes devem conter o padrão ${NomeDeEscapador.pattern}`,
        );
    }
}
