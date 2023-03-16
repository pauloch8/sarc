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
        test('retorna um objeto se o parâmetro estiver correto', () => {
            const sut = new IdFormularioFactory();
            const titulo = 'titulo_teste_de_unidade01';
            const retorno = sut.criarDeString(titulo);
            expect(retorno).toBeInstanceOf(IdFormulario);
            expect(retorno.toString()).toBe('titulo_teste_de_unidade01');
        });
        test('lança erro se o parâmetro estiver incorreto', () => {
            const sut = new IdFormularioFactory();
            const titulo = 'titulo=teste_de_unidade01'; // tem um caractere inválido: =
            expect(() => sut.criarDeString(titulo)).toThrow(
                ErroIdStringInvalida,
            );
        });
    });
});
