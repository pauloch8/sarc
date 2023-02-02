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

    criar(texto: string) {
        return new TextoModelo(
            texto,
            this.removeHtml,
            this.escapadorDeVariavelFactory,
        );
    }
}
