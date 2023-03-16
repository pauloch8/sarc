import { RemoveHtml } from '@/dominio/util/RemoveHtml';
import { IEscapadorDeVariavelFactory } from './escapador/variavel/EscapadorDeVariavelFactory';
import { ITextoModelo, TextoModelo } from './TextoModelo';

export interface ITextoModeloFactory {
    criar(texto: string): ITextoModelo;
}

export class TextoModeloFactory implements TextoModeloFactory {
    constructor(
        private removeHtml: RemoveHtml,
        private escapadorDeVariavelFactory: IEscapadorDeVariavelFactory,
    ) {}

    /**
     * Cria um objeto TextoModelo
     * @param texto Texto com três ou mais caracteres
     * @throws {ErroTextoModeloVazio} se fornecido um texto vazio
     * @throws {ErroTextoModeloComMenosDeTresCaracteres} se fornecido um texto com menos de três caracteres
     */
    criar(texto: string) {
        return new TextoModelo(
            texto,
            this.removeHtml,
            this.escapadorDeVariavelFactory,
        );
    }
}
