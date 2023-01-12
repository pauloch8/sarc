import { RemoveHtml } from '@/dominio/util/RemoveHtml';

export interface ITextoModelo {
    getTextoHtml(): string;
    getTextoPlano(): string;
    toString(): string;
}

export class TextoModelo implements ITextoModelo {
    constructor(private texto: string, private removeHtml: RemoveHtml) {
        this.validar();
    }
    private validar() {
        if (!this.texto) {
            throw new ErroTextoModeloVazio();
        }
        if (this.texto.length < 3) {
            throw new ErroTextoModeloComMenosDeTresCaracteres();
        }
    }
    getTextoHtml() {
        return this.texto;
    }
    getTextoPlano() {
        return this.removeHtml.remover(this.texto);
    }
    toString() {
        return this.getTextoPlano();
    }
}

export class ErroDeCriacaoDeTextoModelo extends Error {}

export class ErroTextoModeloVazio extends ErroDeCriacaoDeTextoModelo {
    constructor() {
        super('Texto de modelo vazio');
    }
}
export class ErroTextoModeloComMenosDeTresCaracteres extends ErroDeCriacaoDeTextoModelo {
    constructor() {
        super('Texto de modelo com menos de três caracteres');
    }
}
