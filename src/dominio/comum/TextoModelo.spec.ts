import {
    TextoModelo,
    ErroTextoModeloVazio,
    ErroDeCriacaoDeTextoModelo,
    ErroTextoModeloComMenosDeTresCaracteres,
} from './TextoModelo';
import {
    RemoveHtmlDummy,
    RemoveHtmlRetornaStringVaziaStub,
    RemoveHtmlRetornaTextoPlanoStub,
} from '../util/RemoveHtml.dubles';
import { EscapadorDeVariavelFactoryDummy } from './escapador/variavel/EscapadorDeVariavelFactory.dubles';

describe('TextoModelo', () => {
    describe('valida na instanciação', () => {
        describe('retorna um objeto se o parâmetro estiver correto', () => {
            const removeHtml = new RemoveHtmlDummy();
            const escapadorDeVariavelFactory =
                new EscapadorDeVariavelFactoryDummy();
            const sut = new TextoModelo(
                '<html>teste</html>',
                removeHtml,
                escapadorDeVariavelFactory,
            );
            expect(sut).toBeInstanceOf(TextoModelo);
        });
        describe('lança erro', () => {
            describe('se for informado um texto vazio', () => {
                test('com o parâmetro uma string vazia', () => {
                    const removeHtml = new RemoveHtmlDummy();
                    const escapadorDeVariavelFactory =
                        new EscapadorDeVariavelFactoryDummy();
                    const instanciacao = expect(() => {
                        new TextoModelo(
                            '',
                            removeHtml,
                            escapadorDeVariavelFactory,
                        );
                    });
                    instanciacao.toThrow(ErroTextoModeloVazio);
                    instanciacao.toThrow(ErroDeCriacaoDeTextoModelo);
                });
                test('com o parâmetro uma html com texto vazio', () => {
                    const removeHtml = new RemoveHtmlRetornaStringVaziaStub();
                    const escapadorDeVariavelFactory =
                        new EscapadorDeVariavelFactoryDummy();
                    const instanciacao = expect(() => {
                        new TextoModelo(
                            '<html></html>',
                            removeHtml,
                            escapadorDeVariavelFactory,
                        );
                    });
                    instanciacao.toThrow(ErroTextoModeloVazio);
                    instanciacao.toThrow(ErroDeCriacaoDeTextoModelo);
                });
            });
            test('se for informado um texto com menos de três caracteres', () => {
                const removeHtml = new RemoveHtmlDummy();
                const escapadorDeVariavelFactory =
                    new EscapadorDeVariavelFactoryDummy();
                const instanciacao = expect(() => {
                    new TextoModelo(
                        '  ',
                        removeHtml,
                        escapadorDeVariavelFactory,
                    );
                });
                instanciacao.toThrow(ErroTextoModeloComMenosDeTresCaracteres);
                instanciacao.toThrow(ErroDeCriacaoDeTextoModelo);
            });
        });
    });
    test('permite obter o texto HTML', () => {
        const removeHtml = new RemoveHtmlDummy();
        const escapadorDeVariavelFactory =
            new EscapadorDeVariavelFactoryDummy();
        const sut = new TextoModelo(
            'texto modelo',
            removeHtml,
            escapadorDeVariavelFactory,
        );
        const textoHtml = sut.getTextoHtml();
        expect(textoHtml).toBe('texto modelo');
    });
    test('permite obter o texto plano (removido o html)', () => {
        const removeHtml = new RemoveHtmlRetornaTextoPlanoStub();
        const escapadorDeVariavelFactory =
            new EscapadorDeVariavelFactoryDummy();
        const sut = new TextoModelo(
            'texto modelo',
            removeHtml,
            escapadorDeVariavelFactory,
        );
        expect(sut.getTextoPlano()).toBe(removeHtml.textoPlano);
    });
    test('a sua representação em string é o texto plano', () => {
        const removeHtml = new RemoveHtmlRetornaTextoPlanoStub();
        const escapadorDeVariavelFactory =
            new EscapadorDeVariavelFactoryDummy();
        const sut = new TextoModelo(
            'texto modelo',
            removeHtml,
            escapadorDeVariavelFactory,
        );
        expect(sut.toString()).toBe(removeHtml.textoPlano);
    });

    test('permite obter os escapadores', () => {
        const removeHtml = new RemoveHtmlRetornaTextoPlanoStub();
        const escapadorDeVariavelFactory =
            new EscapadorDeVariavelFactoryDummy();
        const sut = new TextoModelo(
            'Texto com um ${escapador} mais ${outroEscapador}',
            removeHtml,
            escapadorDeVariavelFactory,
        );
        expect(sut.getEscapadores()).toBe(
            escapadorDeVariavelFactory.retornoDoMetodoCriarEscapadoresDeTexto,
        );
    });
});
