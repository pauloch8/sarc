import { Editor } from '@/dominio/editor/Editor';
import { EditorFactory } from '@/dominio/editor/EditorFactory';
import { especificacaoDTOFake } from '@/tests/dubles/dominio/especificacao/especificacaoDTOFake';

describe('EditorFactory', () => {
    describe('criarNovoEditor', () => {
        test.skip('retorna um EditorFactory', () => {
            const sut = new EditorFactory();
            const editor = sut.criarNovoEditor();
            expect(editor).toBeInstanceOf(Editor);
        });
    });

    describe('criarDaEspecificacao', () => {
        test.skip('retorna um EditorFactory', async () => {
            const sut = new EditorFactory();
            const editor = sut.criarDaEspecificacao(especificacaoDTOFake);
            expect(editor.getTitulo()).toBe(especificacaoDTOFake.titulo);
        });
    });
});
