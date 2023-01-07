import { ITextoEditavel, TextoEditavel } from './TextoEditavel';

export interface ITextoEditavelFactory {
    criar(categoria: string, texto: string, indice: number): ITextoEditavel;
}

export class TextoEditavelFactory implements ITextoEditavelFactory {
    criar(categoria: string, texto: string, indice: number) {
        return new TextoEditavel(categoria, texto, indice);
    }
}
