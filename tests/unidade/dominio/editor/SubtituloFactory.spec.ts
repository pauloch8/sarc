import {
    ErroSubtituloComMenosDeTresCaracteres,
    ErroSubtituloEmBranco,
    SubtituloFactory,
} from '@/dominio/comum/SubtituloFactory';

describe('SubtituloFactory', () => {
    describe('ao criar um Subtítulo', () => {
        describe('lança erro', () => {
            test('se for uma string vazia', async () => {
                const tituloFactory = new SubtituloFactory();
                expect(() => {
                    tituloFactory.criar('');
                }).toThrow(ErroSubtituloEmBranco);
            });
            test('se for uma string com menos de três caracteres', async () => {
                const tituloFactory = new SubtituloFactory();
                expect(() => {
                    tituloFactory.criar('12');
                }).toThrow(ErroSubtituloComMenosDeTresCaracteres);
            });
        });
    });
});
