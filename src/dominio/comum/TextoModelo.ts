import { RemoveHtml } from '@/dominio/util/RemoveHtml';
import { IEscapadorDeVariavel } from './escapador/variavel/EscapadorDeVariavel';
import { IEscapadorDeVariavelFactory } from './escapador/variavel/EscapadorDeVariavelFactory';

export interface ITextoModelo {
    getTextoHtml(): string;
    getTextoPlano(): string;
    getEscapadores(): IEscapadorDeVariavel[];
    toString(): string;
}

export class TextoModelo implements ITextoModelo {
    /**
     * Cria um objeto TextoModelo. Valida o texto na instanciação e lança erro se fornecido um texto inválido
     * @param texto Texto com três ou mais caracteres
     * @param {RemoveHtml} removeHtml objeto removedor de Html para gerar um texto plano
     * @param {IEscapadorDeVariavelFactory} escapadorDeVariavelFactory fábrica de escapador de variável
     * @throws {ErroTextoModeloVazio} se fornecido um texto vazio
     * @throws {ErroTextoModeloComMenosDeTresCaracteres} se fornecido um texto com menos de três caracteres
     */
    constructor(
        private texto: string,
        private removeHtml: RemoveHtml,
        private escapadorDeVariavelFactory: IEscapadorDeVariavelFactory,
    ) {
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
    getEscapadores() {
        return this.escapadorDeVariavelFactory.criarEscapadoresDeTexto(
            this.texto,
        );
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
