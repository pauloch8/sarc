import { RemoveHtmlDummy } from '../util/RemoveHtml.dubles';
import { TextoModelo } from './TextoModelo';
import { TextoModeloFactory } from './TextoModeloFactory';
import { EscapadorDeVariavelFactoryDummy } from './escapador/variavel/EscapadorDeVariavelFactory.dubles';

describe('TextoModeloFactory', () => {
    describe('ao criar de uma string', () => {
        test('retorna um objeto TextoModelo', async () => {
            const removeHtml = new RemoveHtmlDummy();
            const escapadorDeVariavelFactory =
                new EscapadorDeVariavelFactoryDummy();
            const sut = new TextoModeloFactory(
                removeHtml,
                escapadorDeVariavelFactory,
            );
            const objeto = sut.criar(`TextoModelo válido`);
            expect(objeto).toBeInstanceOf(TextoModelo);
        });
        test('retorna erro se o parâmetro estiver incorreto', async () => {
            const removeHtml = new RemoveHtmlDummy();
            const escapadorDeVariavelFactory =
                new EscapadorDeVariavelFactoryDummy();
            const sut = new TextoModeloFactory(
                removeHtml,
                escapadorDeVariavelFactory,
            );
            expect(() => sut.criar(``)).toThrow();
        });
    });
});
