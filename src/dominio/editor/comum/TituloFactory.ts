import { Titulo } from './Titulo';

export interface ITituloFactory {
    criar(titulo: string): Titulo;
}

export class TituloFactory implements ITituloFactory {
    criar(titulo: string) {
        return new Titulo(titulo);
    }
}
