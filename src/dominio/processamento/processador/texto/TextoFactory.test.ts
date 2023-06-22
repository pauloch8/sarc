import { makeTextoDtoFake } from '@/dominio/especificacao/EspecificacaoDTO.dubles';
import { Texto } from './Texto';
import { TextoFactory } from './TextoFactory';

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
