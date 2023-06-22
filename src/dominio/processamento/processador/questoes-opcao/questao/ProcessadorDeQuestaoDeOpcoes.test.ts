import { makeEscapadorDeQuestaoFake } from '@/dominio/comum/escapador/questao/EscapadorDeQuestao.dubles';
import { makeRespostaDeQuestaoFake } from '@/dominio/formulario/respostas/Respostas.dubles';
import { makeProcessadorDeOpcaoStub } from '../opcao/ProcessadorDeOpcao.dubles';
import {
    ErroIdDaQuestaoDiferenteDoIdDoProcessador,
    ErroNaoEncontrouProcessadorDaOpcaoDaResposta,
    ProcessadorDeQuestaoDeOpcoes,
} from './ProcessadorDeQuestaoDeOpcoes';

describe('ProcessadorDeQuestaoDeOpcoes', () => {
    describe('processar', () => {
        test('lança erro se o id da resposta não for igual ao id do processador', () => {
            const { sut, escapadorDeQuestaoFake } = makeSut();
            const respostaFake = makeRespostaDeQuestaoFake();
            respostaFake.id = 'questao2';
            const templateFake = 'Template ${questao2.categoria1}';
            expect(() => {
                sut.processar(
                    escapadorDeQuestaoFake,
                    respostaFake,
                    templateFake,
                );
            }).toThrow(ErroIdDaQuestaoDiferenteDoIdDoProcessador);
        });
        test('lança erro se não encontrar processadores da questão', () => {
            const { sut, processadorStub, escapadorDeQuestaoFake } = makeSut();
            processadorStub.compararId = () => {
                return false;
            };
            const respostaFake = makeRespostaDeQuestaoFake();
            const templateFake = 'Template ${questao1.categoria1}';
            expect(() => {
                sut.processar(
                    escapadorDeQuestaoFake,
                    respostaFake,
                    templateFake,
                );
            }).toThrow(ErroNaoEncontrouProcessadorDaOpcaoDaResposta);
        });
        test('substitui o espaçador do template pelo texto da resposta', async () => {
            const { sut, escapadorDeQuestaoFake } = makeSut();
            const respostaFake = makeRespostaDeQuestaoFake();
            const templateFake =
                'Template de ${questao1.categoria1} de ${questao2.categoria2}';
            const textoProcessado = sut.processar(
                escapadorDeQuestaoFake,
                respostaFake,
                templateFake,
            );
            expect(textoProcessado).toBe(
                'Template de sistema de ${questao2.categoria2}',
            );
        });
    });
});

function makeSut() {
    const processadorStub = makeProcessadorDeOpcaoStub();
    const escapadorDeQuestaoFake = makeEscapadorDeQuestaoFake();
    const sut = new ProcessadorDeQuestaoDeOpcoes('questao1', [processadorStub]);
    return { sut, processadorStub, escapadorDeQuestaoFake };
}
