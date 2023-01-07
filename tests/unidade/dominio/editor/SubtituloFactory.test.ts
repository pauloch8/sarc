import {
    ErroSubtituloComMenosDeTresCaracteres,
    ErroSubtituloEmBranco,
    SubtituloFactory,
} from '@/dominio/editor/comum/SubtituloFactory';

describe('SubtituloFactory', () => {
    describe('criar', () => {
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
