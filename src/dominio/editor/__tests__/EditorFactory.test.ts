import { criarEspecificacaoFake } from '@/dominio/especificacao/__tests__/criarEspecificacaoFake';
import { Editor } from '../Editor';
import { EditorFactory } from '../EditorFactory';

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
            const especificacaoFake = criarEspecificacaoFake();
            const editor = sut.criarDaEspecificacao(especificacaoFake);
            expect(editor.getTitulo()).toBe(especificacaoFake.titulo);
        });
    });
});
