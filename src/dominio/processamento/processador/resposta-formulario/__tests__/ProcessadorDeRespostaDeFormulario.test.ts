import {
    RespostaDeFormulario,
    RespostaDeOpcao,
} from '../../../../formulario/respostas/Respostas';
import {
    ProcessadorDeRespostaDeFormulario,
    ErroRespostaNaoPossuiIdDoProcessador,
    ErroProcessadorDeQuestaoNaoEncontrado,
    ErroProcessamentoNaoRetornouTexto,
    ErroSobrouEspacadorAposProcessamento,
} from '../ProcessadorDeRespostaDeFormulario';

describe('ProcessadorDeRespostaDeFormulario', () => {
    describe('processar', () => {
        test('dá erro se a resposta fornecida não possuir o mesmo id', async () => {
            const sut = new ProcessadorDeRespostaDeFormulario(
                'teste',
                [],
                'template',
            );
            const respostaFake: RespostaDeFormulario = {
                id: 'teste-diferente',
                respostasQuestoes: [],
            };
            expect(() => {
                sut.processar(respostaFake);
            }).toThrow(ErroRespostaNaoPossuiIdDoProcessador);
        });
        test('dá erro se a resposta não possui algum processador', async () => {
            const sut = new ProcessadorDeRespostaDeFormulario(
                'teste',
                [
                    {
                        compararId(id: string) {
                            return false;
                        },
                        processar(resposta: RespostaDeOpcao) {
                            throw 9;
                        },
                    },
                ],
                'template',
            );
            const respostaFake: RespostaDeFormulario = {
                id: 'teste',
                respostasQuestoes: [
                    {
                        id: 'questao1',
                        resposta: {
                            id: 'resposta1',
                        },
                    },
                ],
            };
            expect(() => {
                sut.processar(respostaFake);
            }).toThrow(ErroProcessadorDeQuestaoNaoEncontrado);
        });
        test('dá erro se o processamento não retornar texto', async () => {
            const sut = new ProcessadorDeRespostaDeFormulario(
                'teste',
                [
                    {
                        compararId(id: string) {
                            return true;
                        },
                        processar(resposta: RespostaDeOpcao) {
                            return '';
                        },
                    },
                ],
                'template',
            );
            const respostaFake: RespostaDeFormulario = {
                id: 'teste',
                respostasQuestoes: [
                    {
                        id: 'questao1',
                        resposta: {
                            id: 'resposta1',
                        },
                    },
                ],
            };
            expect(() => {
                sut.processar(respostaFake);
            }).toThrow(ErroProcessamentoNaoRetornouTexto);
        });
        test('chama o processamento de cada processadorDeOpcao encontrado', async () => {
            const processadorDeOpcaoFake = {
                compararId(id: string) {
                    return true;
                },
                processar(resposta: RespostaDeOpcao) {
                    return 'a';
                },
            };
            const processarSpy = jest.spyOn(
                processadorDeOpcaoFake,
                'processar',
            );
            const sut = new ProcessadorDeRespostaDeFormulario(
                'teste',
                [processadorDeOpcaoFake],
                'template',
            );
            const respostaFake: RespostaDeFormulario = {
                id: 'teste',
                respostasQuestoes: [
                    {
                        id: 'questao1',
                        resposta: {
                            id: 'resposta1',
                        },
                    },
                ],
            };
            sut.processar(respostaFake);
            expect(processarSpy).toHaveBeenCalledTimes(1);
        });
        test('dá erro se após o processamento sobrou algum espaçador no texto', () => {
            const processadorDeOpcaoFake = {
                compararId(id: string) {
                    return true;
                },
                processar(resposta: RespostaDeOpcao, template: string) {
                    return template;
                },
            };
            const sut = new ProcessadorDeRespostaDeFormulario(
                'teste',
                [processadorDeOpcaoFake],
                'texto com ${espacador}',
            );
            const respostaFake: RespostaDeFormulario = {
                id: 'teste',
                respostasQuestoes: [
                    {
                        id: 'questao1',
                        resposta: {
                            id: 'resposta1',
                        },
                    },
                ],
            };
            expect(() => {
                sut.processar(respostaFake);
            }).toThrow(ErroSobrouEspacadorAposProcessamento);
        });
    });
});
