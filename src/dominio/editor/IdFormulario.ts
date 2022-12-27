export class IdFormulario {
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

export class ErroIdStringInvalida extends Error {
    constructor(idString: string) {
        super(`String de Id de Formulário inválida: "${idString}"`);
    }
}
