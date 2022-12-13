import { mount } from '@vue/test-utils';
import { Editor } from '@/dominio/editor/Editor';
import TelaEditor from '../TelaEditor.vue';

describe('TelaEditor', () => {
    xtest('preenche o título de um formulário', async () => {
        const editor = new Editor();
        const sut = mount(TelaEditor, { props: { editor } });
        const tituloInput = sut.get('#tituloFormulario');
        const textoTitulo = 'Teste de Título';
        await tituloInput.setValue(textoTitulo);
        expect(editor.getTitulo()).toBe(textoTitulo);
    });
    xtest('exibe mensagem de erro ao preencher título vazio', async () => {
        const editor = new Editor();
        const sut = mount(TelaEditor, { props: { editor } });
        const tituloInput = sut.get('#tituloFormulario');
        const textoTitulo = '';
        await tituloInput.setValue(textoTitulo);
        expect(editor.getTitulo()).toBe(textoTitulo);
    });
});
