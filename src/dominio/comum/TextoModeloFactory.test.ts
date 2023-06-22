import { TextoModeloFactory } from './TextoModeloFactory';
import { RemovHtmlRetornaSemAlterarStub } from '../util/RemoveHtml.dubles';
import { TextoModelo } from './TextoModelo';
import { EscapadorDeVariavelFactoryDummy } from './escapador/variavel/EscapadorDeVariavelFactory.dubles';

describe('TextoModeloFactory', () => {
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
