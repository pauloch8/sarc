import { ITitulo, Titulo } from './Titulo';

export interface ITituloFactory {
    criar(titulo: string): ITitulo;
}

export class TituloFactory implements ITituloFactory {
    criar(titulo: string) {
        return new Titulo(titulo);
    }
}
