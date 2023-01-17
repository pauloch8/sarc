import {
    TextoModelo,
    ErroTextoModeloVazio,
    ErroTextoModeloComMenosDeTresCaracteres,
    ErroDeCriacaoDeTextoModelo,
} from '@/dominio/comum/TextoModelo';
import {
    RemoveHtmlDummy,
    RemoveHtmlRetornaTextoPlanoStub,
} from '@/tests/dubles/dominio/util/RemoveHtmlDubles';

describe('TextoModelo', () => {
    describe('lança erro na instanciação', () => {
        test('se for informado um texto vazio', () => {
            const removeHtml = new RemoveHtmlDummy();
            const instanciacao = expect(() => {
                new TextoModelo('', removeHtml);
            });
            instanciacao.toThrow(ErroTextoModeloVazio);
            instanciacao.toThrow(ErroDeCriacaoDeTextoModelo);
        });
        test('se for informado um texto com menos de três caracteres', () => {
            const removeHtml = new RemoveHtmlDummy();
            const instanciacao = expect(() => {
                new TextoModelo('  ', removeHtml);
            });
            instanciacao.toThrow(ErroTextoModeloComMenosDeTresCaracteres);
            instanciacao.toThrow(ErroDeCriacaoDeTextoModelo);
        });
    });
    test('permite obter o texto HTML', () => {
        const removeHtml = new RemoveHtmlDummy();
        const sut = new TextoModelo('texto modelo', removeHtml);
        const textoHtml = sut.getTextoHtml();
        expect(textoHtml).toBe('texto modelo');
    });
    test('permite obter o texto plano (removido o html)', () => {
        const removeHtml = new RemoveHtmlRetornaTextoPlanoStub();
        const sut = new TextoModelo('texto modelo', removeHtml);
        expect(sut.getTextoPlano()).toBe(removeHtml.textoPlano);
    });
    test('a sua representação em string é o texto plano', () => {
        const removeHtml = new RemoveHtmlRetornaTextoPlanoStub();
        const sut = new TextoModelo('texto modelo', removeHtml);
        expect(sut.toString()).toBe(removeHtml.textoPlano);
    });
});
