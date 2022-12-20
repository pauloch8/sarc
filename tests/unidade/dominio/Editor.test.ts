import { Editor } from '@/dominio/editor/Editor';
import { Titulo } from '@/dominio/editor/Titulo';

describe('Editor', () => {
    describe('titulo', () => {
        test('atribuir um texto de título', () => {
            const sut = new Editor();
            const titulo = new Titulo('Título teste');
            sut.setTitulo(titulo);
            expect(sut.getTitulo()).toBe(titulo);
        });
    });
});
