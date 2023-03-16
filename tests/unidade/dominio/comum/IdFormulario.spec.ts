import {
    ErroIdStringInvalida,
    IdFormulario,
} from '@/dominio/comum/IdFormulario';

describe('IdFormulario', () => {
    describe('na instanciação', () => {
        test('retorna um objeto se o parâmetro estiver correto', () => {
            const sut = new IdFormulario('Titulo_teste-de-unidade');
            expect(sut).toBeInstanceOf(IdFormulario);
        });
        test('lança erro se o parâmetro não for composto de letras minúsculas, números e sublinhado', () => {
            expect(() => {
                new IdFormulario('titulo teste de unidade');
            }).toThrow(ErroIdStringInvalida);
            expect(() => {
                new IdFormulario(`texto com 
                quebra de linha`);
            }).toThrow(ErroIdStringInvalida);
            expect(() => {
                new IdFormulario('texto_com_!caractere#especial');
            }).toThrow(ErroIdStringInvalida);
            expect(() => {
                new IdFormulario(' espaco_nos_cantos ');
            }).toThrow(ErroIdStringInvalida);
            expect(() => {
                new IdFormulario('contém_açentos');
            }).toThrow(ErroIdStringInvalida);
        });
    });
});
