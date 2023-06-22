import {
    Subtitulo,
    ErroSubtituloComMenosDeTresCaracteres,
    ErroSubtituloEmBranco,
} from './Subtitulo';

describe('Subtitulo', () => {
    describe('valida na instanciação', () => {
        test('retorna um objeto se o parâmetro estiver correto', async () => {
            const sut = new Subtitulo('Título');
            expect(sut).toBeInstanceOf(Subtitulo);
        });
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
