import {
    NomeDeEscapador,
    ErroFornecidoNomeDeVariavelIncorreto,
} from '@/dominio/comum/escapador/nome/NomeDeEscapador';

describe('NomeDeEscapador', () => {
    describe('instanciar', () => {
        test('instancia com um nome correto', async () => {
            const sut = new NomeDeEscapador('teste_sut-Jest1');
            expect(sut).toBeInstanceOf(NomeDeEscapador);
        });
        test('lança erro ao instanciar com um nome incorreto', async () => {
            expect(() => {
                new NomeDeEscapador('$teste_sut-jest1');
            }).toThrow(ErroFornecidoNomeDeVariavelIncorreto);
        });
    });
});
