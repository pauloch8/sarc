import { TextoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { Texto } from '../Texto';
import { TextoFactory } from '../TextoFactory';

describe('TextoFactory', () => {
    describe('criarDeEspecificacao', () => {
        test('retorna um texto', async () => {
            const sut = new TextoFactory();
            const textoDtoFake = makeTextoDtoFake();
            const retorno = sut.criarDeEspecificacao([textoDtoFake]);
            expect(retorno[0]).toBeInstanceOf(Texto);
        });
    });
});

function makeTextoDtoFake() {
    const textoDtoFake: TextoDTO = {
        categoria: 'categoria1',
        texto: 'texto1',
    };
    return textoDtoFake;
}
