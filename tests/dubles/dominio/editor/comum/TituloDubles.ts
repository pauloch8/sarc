import { ErroDeCriacaoDeTitulo, ITitulo } from '@/dominio/editor/comum/Titulo';

export class TituloDummy implements ITitulo {}

export class ErroDeCriacaoDeTituloFake extends ErroDeCriacaoDeTitulo {
    constructor(textoDoErro: string) {
        super(textoDoErro);
    }
}
