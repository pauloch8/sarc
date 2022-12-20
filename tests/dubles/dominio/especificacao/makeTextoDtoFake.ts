import { TextoDTO } from '@/dominio/especificacao/EspecificacaoDTO';

export function makeTextoDtoFake() {
    const textoFake: TextoDTO = {
        categoria: 'categoria1',
        texto: 'texto1',
    };
    return textoFake;
}
