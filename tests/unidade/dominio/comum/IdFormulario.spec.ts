import {
    ErroIdStringInvalida,
    IdFormulario,
} from '@/dominio/comum/IdFormulario';

describe('IdFormulario', () => {
    describe('valida na instanciação', () => {
        describe('lança erro', () => {
            test('se não for composto de letras minúsculas, números e sublinhado', () => {
                expect(() => {
                    new IdFormulario('titulo teste de unidade');
                }).toThrow(ErroIdStringInvalida);
                expect(() => {
                    new IdFormulario(`texto com 
                quebra de linha`);
                }).toThrow(ErroIdStringInvalida);
                expect(() => {
                    new IdFormulario('Texto_Com_Letra_Maiuscula');
                }).toThrow(ErroIdStringInvalida);
                expect(() => {
                    new IdFormulario('Texto_Com_Letra_Maiuscula');
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
});
