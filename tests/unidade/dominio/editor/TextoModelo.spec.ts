import {
    TextoModelo,
    ErroTextoModeloVazio,
    ErroTextoModeloComMenosDeTresCaracteres,
    ErroDeCriacaoDeTextoModelo,
} from '@/dominio/editor/comum/TextoModelo';
import {
    RemoveHtmlDummy,
    RemoveHtmlRetornaTextoPlanoStub,
} from '@/tests/dubles/dominio/util/RemoveHtmlDubles';

describe('TextoModelo', () => {
    describe('lança erro de criação', () => {
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
    test('texto html é o próprio texto usado na instanciação', () => {
        const removeHtml = new RemoveHtmlDummy();
        const sut = new TextoModelo('texto modelo', removeHtml);
        expect(sut.getTextoHtml()).toBe('texto modelo');
    });
    test('texto plano é o texto removido html', () => {
        const removeHtml = new RemoveHtmlRetornaTextoPlanoStub();
        const sut = new TextoModelo('texto modelo', removeHtml);
        expect(sut.getTextoPlano()).toBe(removeHtml.textoPlano);
    });
    test('representação em string do objeto é o texto removido html', () => {
        const removeHtml = new RemoveHtmlRetornaTextoPlanoStub();
        const sut = new TextoModelo('texto modelo', removeHtml);
        expect(sut.toString()).toBe(removeHtml.textoPlano);
    });
});
