import { ErroDeCriacaoDeTitulo } from '@/dominio/editor/comum/Titulo';

export class ErroDeCriacaoDeTituloFake extends ErroDeCriacaoDeTitulo {
    constructor(textoDoErro: string) {
        super(textoDoErro);
    }
}
