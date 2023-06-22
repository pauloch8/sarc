import { TituloFactory } from './TituloFactory';
import { Titulo } from './Titulo';

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
