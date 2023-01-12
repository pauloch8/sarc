import { EscapadorDeVariavel } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavel';
import { EscapadorDeVariavelFactory } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavelFactory';

describe('EscapadorDeVariavelFactory', () => {
    describe('criarEscapadoresDeTexto', () => {
        test('retorna escapador de variável', async () => {
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
});
