import { Subtitulo } from '@/dominio/comum/Subtitulo';
import { SubtituloFactory } from '@/dominio/comum/SubtituloFactory';

describe('SubtituloFactory', () => {
    describe('ao criar de uma string', () => {
        test('retorna um objeto', async () => {
            const sut = new SubtituloFactory();
            const objeto = sut.criar(`Subtítulo permite um texto grande
                com quebra de linha`);
            expect(objeto).toBeInstanceOf(Subtitulo);
        });
    });
});
