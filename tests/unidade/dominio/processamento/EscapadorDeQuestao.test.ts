import { NomeDeEscapador } from '@/dominio/comum/escapador/nome/NomeDeEscapador';
import { EscapadorDeQuestao } from '@/dominio/comum/escapador/questao/EscapadorDeQuestao';

describe('EscapadorDeQuestao', () => {
    describe('compararQuestao', () => {
        test('Compara com uma string', () => {
            const sut = makeSut();

            const retorno = sut.compararQuestao('questao');
            expect(retorno).toBeTruthy();

            const retornoErrado = sut.compararQuestao('errado');
            expect(retornoErrado).toBeFalsy();
        });
        test('Compara com um NomeDeEscapador', () => {
            const sut = makeSut();

            const nomeCorreto = new NomeDeEscapador('questao');
            const retorno = sut.compararQuestao(nomeCorreto);
            expect(retorno).toBeTruthy();

            const nomeErrado = new NomeDeEscapador('errado');
            const retornoErrado = sut.compararQuestao(nomeErrado);
            expect(retornoErrado).toBeFalsy();
        });
    });
    describe('compararCategoria', () => {
        test('Compara com uma string', () => {
            const sut = makeSut();

            const retorno = sut.compararCategoria('categoria');
            expect(retorno).toBeTruthy();

            const retornoErrado = sut.compararCategoria('errado');
            expect(retornoErrado).toBeFalsy();
        });
        test('Compara com um NomeDeEscapador', () => {
            const sut = makeSut();

            const nomeCorreto = new NomeDeEscapador('categoria');
            const retorno = sut.compararCategoria(nomeCorreto);
            expect(retorno).toBeTruthy();

            const nomeErrado = new NomeDeEscapador('errado');
            const retornoErrado = sut.compararCategoria(nomeErrado);
            expect(retornoErrado).toBeFalsy();
        });
    });
    describe('toString', () => {
        test('retorna no padrão de escapador', () => {
            const sut = makeSut();
            expect(sut.toString()).toBe('${questao.categoria}');
        });
    });
});

function makeSut() {
    const sut = new EscapadorDeQuestao(
        new NomeDeEscapador('questao'),
        new NomeDeEscapador('categoria'),
    );
    return sut;
}
