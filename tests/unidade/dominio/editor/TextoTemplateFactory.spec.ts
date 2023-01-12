import { TextoModeloFactory } from '@/dominio/comum/TextoModeloFactory';
import { TextoModelo } from '@/dominio/comum/TextoModelo';
import { RemoveHtml } from '@/dominio/util/RemoveHtml';

class RemovHtmlRetornaSemAlterarStub implements RemoveHtml {
    remover(htmlString: string): string {
        return htmlString;
    }
}

describe('TextoTemplateFactory', () => {
    describe('criar', () => {
        test('retorna uma instância de TextoTemplate', () => {
            const removeHtml = new RemovHtmlRetornaSemAlterarStub();
            const sut = new TextoModeloFactory(removeHtml);
            const instancia = sut.criar('texto template');
            expect(instancia).toBeInstanceOf(TextoModelo);
        });
    });
});
