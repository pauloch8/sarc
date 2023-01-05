import { ErroDeCriacaoDeTitulo } from '@/dominio/editor/Titulo';

export class ErroDeCriacaoDeTituloFake extends ErroDeCriacaoDeTitulo {
    constructor(textoDoErro: string) {
        super(textoDoErro);
    }
}
