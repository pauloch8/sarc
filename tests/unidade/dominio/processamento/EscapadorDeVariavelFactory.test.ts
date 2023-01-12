import { EscapadorDeVariavel } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavel';
import { EscapadorDeVariavelFactory } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavelFactory';
import { IdFormularioDummy } from '@/tests/dubles/dominio/comum/IdFormularioDubles';
import { text } from '@fortawesome/fontawesome-svg-core';

describe('EscapadorDeVariavelFactory', () => {
    describe('criarEscapadoresDeTexto', () => {
        test('retorna escapador de variável', () => {
            const sut = new EscapadorDeVariavelFactory();
            const escapadores = sut.criarEscapadoresDeTexto(
                'Texto no qual existe ${mais} de uma ${variavel} dentro',
            );
            expect(escapadores).toHaveLength(2);
            expect(escapadores[0]).toBeInstanceOf(EscapadorDeVariavel);
        });
        test('retorna array vazia caso não encontre escapadores que combinem com o padrão', () => {
            const sut = new EscapadorDeVariavelFactory();
            const escapadores = sut.criarEscapadoresDeTexto(
                'Texto sem $variavel que combine com o padrão',
            );
            expect(escapadores).toHaveLength(0);
        });
    });

    test('cria a partir de um id-formulario', () => {
        const sut = new EscapadorDeVariavelFactory();
        const id = new IdFormularioDummy();
        expect(sut.criarDeIdFormulario(id)).toBeInstanceOf(EscapadorDeVariavel);
    });
});
