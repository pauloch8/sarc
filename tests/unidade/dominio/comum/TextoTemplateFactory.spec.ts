import { TextoModeloFactory } from '@/dominio/comum/TextoModeloFactory';
import { TextoModelo } from '@/dominio/comum/TextoModelo';
import { RemovHtmlRetornaSemAlterarStub } from '@/tests/dubles/dominio/util/RemoveHtmlDubles';

describe('TextoTemplateFactory', () => {
    test('cria uma instância', () => {
        const removeHtml = new RemovHtmlRetornaSemAlterarStub();
        const sut = new TextoModeloFactory(removeHtml);
        const instancia = sut.criar('texto template');
        expect(instancia).toBeInstanceOf(TextoModelo);
    });
});
