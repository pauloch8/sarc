import {
    ErroIdStringInvalida,
    IdFormulario,
} from '@/dominio/comum/IdFormulario';
import { IdFormularioFactory } from '@/dominio/comum/IdFormularioFactory';
import { Titulo } from '@/dominio/comum/Titulo';

describe('IdFormularioFactory', () => {
    describe('ao criar de um Titulo', () => {
        test('retorna um id com o texto minúsculo e separado por sublinhado', () => {
            const sut = new IdFormularioFactory();
            const titulo = new Titulo('Título teste de unidade');
            const retorno = sut.criarDeTitulo(titulo);
            expect(retorno).toBeInstanceOf(IdFormulario);
            expect(retorno.toString()).toBe('titulo_teste_de_unidade');
        });
    });
    describe('ao criar de uma String', () => {
        test('retorna um objeto', () => {
            const sut = new IdFormularioFactory();
            const titulo = 'titulo_teste_de_unidade01';
            const retorno = sut.criarDeString(titulo);
            expect(retorno).toBeInstanceOf(IdFormulario);
            expect(retorno.toString()).toBe('titulo_teste_de_unidade01');
        });
        describe('lança erro', () => {
            test('se não for composto de letras minúsculas, números e sublinhado', () => {
                const sut = new IdFormularioFactory();
                expect(() => {
                    sut.criarDeString('titulo teste de unidade');
                }).toThrow(ErroIdStringInvalida);
                expect(() => {
                    sut.criarDeString(`texto com 
                quebra de linha`);
                }).toThrow(ErroIdStringInvalida);
                expect(() => {
                    sut.criarDeString('Texto_Com_Letra_Maiuscula');
                }).toThrow(ErroIdStringInvalida);
                expect(() => {
                    sut.criarDeString('Texto_Com_Letra_Maiuscula');
                }).toThrow(ErroIdStringInvalida);
                expect(() => {
                    sut.criarDeString('texto_com_!caractere#especial');
                }).toThrow(ErroIdStringInvalida);
                expect(() => {
                    sut.criarDeString(' espaco_nos_cantos ');
                }).toThrow(ErroIdStringInvalida);
                expect(() => {
                    sut.criarDeString('contém_açentos');
                }).toThrow(ErroIdStringInvalida);
            });
        });
    });
});
