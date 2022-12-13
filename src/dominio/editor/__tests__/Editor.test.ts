import { Editor, ErroTituloEhStringVazia } from '../Editor';

describe('Editor', () => {
    describe('titulo', () => {
        test('atribuir um texto de título', () => {
            const sut = new Editor();
            const titulo = 'Título teste';
            sut.setTitulo(titulo);
            expect(sut.getTitulo()).toBe(titulo);
        });
        test('lança erro se titulo for uma string vazia', () => {
            const sut = new Editor();
            const titulo = '';
            expect(() => {
                sut.setTitulo(titulo);
            }).toThrow(ErroTituloEhStringVazia);
        });
    });
});
