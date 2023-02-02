import { TextoModeloFactory } from '@/dominio/comum/TextoModeloFactory';
import { TextoModelo } from '@/dominio/comum/TextoModelo';
import { RemovHtmlRetornaSemAlterarStub } from '@/tests/dubles/dominio/util/RemoveHtmlDubles';
import { EscapadorDeVariavelFactoryDummy } from '@/tests/dubles/dominio/comum/escapador/variavel/EscapadorDeVariavelFactoryDubles';

describe('TextoTemplateFactory', () => {
    test('cria uma instância', () => {
        const removeHtml = new RemovHtmlRetornaSemAlterarStub();
        const escapadorDeVariavelFactory =
            new EscapadorDeVariavelFactoryDummy();
        const sut = new TextoModeloFactory(
            removeHtml,
            escapadorDeVariavelFactory,
        );
        const instancia = sut.criar('texto template');
        expect(instancia).toBeInstanceOf(TextoModelo);
    });
});
