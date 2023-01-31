import {
    Subtitulo,
    ErroSubtituloComMenosDeTresCaracteres,
    ErroSubtituloEmBranco,
} from '@/dominio/comum/Subtitulo';

describe('SubtituloFactory', () => {
    describe('ao criar um Subtítulo', () => {
        describe('lança erro', () => {
            test('se for uma string vazia', async () => {
                expect(() => {
                    new Subtitulo('');
                }).toThrow(ErroSubtituloEmBranco);
            });
            test('se for uma string com menos de três caracteres', async () => {
                expect(() => {
                    new Subtitulo('TS');
                }).toThrow(ErroSubtituloComMenosDeTresCaracteres);
            });
        });
    });
});
