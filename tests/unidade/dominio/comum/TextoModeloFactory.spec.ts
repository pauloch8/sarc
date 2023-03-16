import { TextoModelo } from '@/dominio/comum/TextoModelo';
import { TextoModeloFactory } from '@/dominio/comum/TextoModeloFactory';
import { EscapadorDeVariavelFactoryDummy } from '@/tests/dubles/dominio/comum/escapador/variavel/EscapadorDeVariavelFactoryDubles';
import { RemoveHtmlDummy } from '@/tests/dubles/dominio/util/RemoveHtmlDubles';

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
