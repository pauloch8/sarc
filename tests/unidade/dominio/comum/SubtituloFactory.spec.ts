import {
    ErroSubtituloComMenosDeTresCaracteres,
    ErroSubtituloEmBranco,
    Subtitulo,
} from '@/dominio/comum/Subtitulo';
import { SubtituloFactory } from '@/dominio/comum/SubtituloFactory';

describe('SubtituloFactory', () => {
    describe('ao criar de uma string', () => {
        test('retorna um objeto Subtitulo', async () => {
            const sut = new SubtituloFactory();
            const objeto = sut.criar(`Subtítulo permite um texto grande
                com quebra de linha`);
            expect(objeto).toBeInstanceOf(Subtitulo);
        });
        test('retorna erro se o parâmetro estiver incorreto', async () => {
            const sut = new SubtituloFactory();
            expect(() => sut.criar(``)).toThrow(ErroSubtituloEmBranco);
            expect(() => sut.criar(`ab`)).toThrow(
                ErroSubtituloComMenosDeTresCaracteres,
            );
        });
    });
});
