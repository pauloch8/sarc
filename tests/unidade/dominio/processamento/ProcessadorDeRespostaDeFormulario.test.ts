import { ModeloDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { criarProcessadorDeRespostaDeFormularioSut } from '@/tests/dubles/dominio/processamento/processador/resposta-formulario/criarProcessadorDeRespostaDeFormularioSut';

import {
    ErroRespostaNaoPossuiIdDoProcessador,
    ErroProcessadorDeQuestaoNaoEncontrado,
} from '@/dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormulario';

describe('Classe ProcessadorDeRespostaDeFormulario', () => {
    describe('método processar', () => {
        test('Retorna os relatórios com os escapadores substituídos pelas respostas', () => {
            const { sut, respostaFake } =
                criarProcessadorDeRespostaDeFormularioSut();
            const textosProcessados = sut.processar(respostaFake);
            const processado1 =
                'template com escapadores: resposta1 resposta2 resposta3';
            const processado2 = 'template com escapadores: resposta1 resposta2';
            expect(textosProcessados[0].texto).toBe(processado1);
            expect(textosProcessados[1].texto).toBe(processado2);
        });
        test('Apaga os escapadores de sobra que existirem', () => {
            const numerosDasQuestoesParaProcessadores = [1, 2, 3];
            const numerosDasQuestoesParaEscapadores = [1, 2, 3, 4]; // encontra os 4 escapadores do template
            const numerosDasQuestoesParaRespostas = [1, 2, 3];
            const templates: ModeloDTO[] = [
                {
                    id: 'id-template1',
                    titulo: 'Titulo Template',
                    texto: 'template com escapadores: ${questao1.categoria1} ${questao2.categoria2} ${questao3.categoria3} ${questao4.categoria4}',
                },
                {
                    id: 'id-template2',
                    titulo: 'Titulo Template 2',
                    texto: 'template com escapadores: ${questao1.categoria1} ${questao3.categoria3} ${questao4.categoria4}',
                },
            ];
            const { sut, respostaFake } =
                criarProcessadorDeRespostaDeFormularioSut(
                    numerosDasQuestoesParaProcessadores,
                    numerosDasQuestoesParaEscapadores,
                    numerosDasQuestoesParaRespostas,
                    templates,
                );
            const textosProcessados = sut.processar(respostaFake);
            const processado1 =
                'template com escapadores: resposta1 resposta2 resposta3 ';
            const processado2 =
                'template com escapadores: resposta1 resposta3 ';
            expect(textosProcessados[0].texto).toBe(processado1);
            expect(textosProcessados[1].texto).toBe(processado2);
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
