import { TituloFactory } from '@/dominio/editor/TituloFactory';

describe('TituloFactory', () => {
    describe('criar', () => {
        test('lança erro se for uma string vazia', async () => {
            const tituloFactory = new TituloFactory();
            expect(() => {
                tituloFactory.criar('');
            }).toThrow();
        });
    });
});
