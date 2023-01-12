import { RemoveHtml } from '@/dominio/util/RemoveHtml';
import { ITextoModelo, TextoModelo } from './TextoModelo';

export interface ITextoModeloFactory {
    criar(texto: string): ITextoModelo;
}

export class TextoModeloFactory implements TextoModeloFactory {
    constructor(private removeHtml: RemoveHtml) {}

    criar(texto: string) {
        return new TextoModelo(texto, this.removeHtml);
    }
}
