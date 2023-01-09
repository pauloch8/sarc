export interface IIdFormulario {
    toString(): string;
}

export class IdFormulario implements IIdFormulario {
    constructor(private idString: string) {
        const valido = IdFormulario.validar(idString);
        if (!valido) {
            throw new ErroIdStringInvalida(idString);
        }
    }
    toString() {
        return this.idString;
    }
    static validar(idString: string) {
        const contemSomenteLetrasMinusculasNumerosSublinhado =
            /^[a-z0-9_-]+$/g.test(idString);
        const valido = contemSomenteLetrasMinusculasNumerosSublinhado;
        return valido;
    }
}

export class ErroDeCriacaoDeIdFormulario extends Error {
    constructor(mensagem: string) {
        super(mensagem);
    }
}

export class ErroIdStringInvalida extends ErroDeCriacaoDeIdFormulario {
    constructor(idString: string) {
        super(`String de Id de Formulário inválida: "${idString}"`);
    }
}
