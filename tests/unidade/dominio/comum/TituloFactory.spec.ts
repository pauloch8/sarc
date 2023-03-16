import { Titulo } from '@/dominio/comum/Titulo';
import { TituloFactory } from '@/dominio/comum/TituloFactory';

describe('TituloFactory', () => {
    describe('ao criar de uma string', () => {
        test('retorna um objeto Titulo', async () => {
            const sut = new TituloFactory();
            const objeto = sut.criar(`Titulo válido`);
            expect(objeto).toBeInstanceOf(Titulo);
        });
        test('retorna erro se o parâmetro estiver incorreto', async () => {
            const sut = new TituloFactory();
            expect(() => sut.criar(``)).toThrow();
        });
    });
});
