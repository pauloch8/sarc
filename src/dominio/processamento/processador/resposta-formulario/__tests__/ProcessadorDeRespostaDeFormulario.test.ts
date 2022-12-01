import { ErroRespostaDaVariavelNaoEcontrada } from '../../questoes-opcao/opcao/ProcessadorDeOpcao';
import {
    ErroRespostaNaoPossuiIdDoProcessador,
    ErroProcessadorDeQuestaoNaoEncontrado,
} from '../ProcessadorDeRespostaDeFormulario';
import { criarProcessadorDeRespostaDeFormularioSut } from './criarProcessadorDeRespostaDeFormularioSut';

describe('Classe ProcessadorDeRespostaDeFormulario', () => {
    describe('método processar', () => {
        test('chama o processamento de cada processadorDeOpcao encontrado', async () => {
            const { sut, processadoresDeOpcaoFake, respostaFake } =
                criarProcessadorDeRespostaDeFormularioSut();
            const processarSpy1 = jest.spyOn(
                processadoresDeOpcaoFake[0],
                'processar',
            );
            const processarSpy2 = jest.spyOn(
                processadoresDeOpcaoFake[0],
                'processar',
            );
            const processarSpy3 = jest.spyOn(
                processadoresDeOpcaoFake[0],
                'processar',
            );
            sut.processar(respostaFake);
            expect(processarSpy1).toHaveBeenCalledTimes(1);
            expect(processarSpy2).toHaveBeenCalledTimes(1);
            expect(processarSpy3).toHaveBeenCalledTimes(1);
        });
        test('Apaga os escapadores de sobra que existirem', () => {
            const numerosDasQuestoesParaProcessadores = [1, 2, 3];
            const numerosDasQuestoesParaEscapadores = [1, 2, 3, 4]; // encontra os 4 escapadores do template
            const numerosDasQuestoesParaRespostas = [1, 2, 3];
            const template =
                'template com escapadores: ${questao1.categoria1} ${questao2.categoria2} ${questao3.categoria3} ${questao4.categoria4}';
            const { sut, respostaFake } =
                criarProcessadorDeRespostaDeFormularioSut(
                    numerosDasQuestoesParaProcessadores,
                    numerosDasQuestoesParaEscapadores,
                    numerosDasQuestoesParaRespostas,
                    template,
                );
            const actual = sut.processar(respostaFake);
            const expected =
                'template com escapadores: resposta1 resposta2 resposta3 ';
            expect(actual).toBe(expected);
        });
        test('dá erro se a resposta fornecida não possuir o mesmo id', async () => {
            const { sut, respostaFake } =
                criarProcessadorDeRespostaDeFormularioSut();
            respostaFake.id = 'outro-id';
            expect(() => {
                sut.processar(respostaFake);
            }).toThrow(ErroRespostaNaoPossuiIdDoProcessador);
        });
        test('dá erro se a resposta não possui algum processador', async () => {
            const numerosDasQuestoesParaProcessadores = [1, 2]; // gera um processador a menos
            const { sut, respostaFake } =
                criarProcessadorDeRespostaDeFormularioSut(
                    numerosDasQuestoesParaProcessadores,
                );
            expect(() => {
                sut.processar(respostaFake);
            }).toThrow(ErroProcessadorDeQuestaoNaoEncontrado);
        });
    });
});
