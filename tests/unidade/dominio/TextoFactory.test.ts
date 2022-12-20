import { Texto } from '@/dominio/processamento/processador/texto/Texto';
import { TextoFactory } from '@/dominio/processamento/processador/texto/TextoFactory';
import { makeTextoDtoFake } from '@/tests/dubles/dominio/especificacao/makeTextoDtoFake';

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
