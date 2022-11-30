import {
    RespostaDeOpcao,
    RespostaDeQuestaoDeOpcoes,
} from '@/dominio/formulario/respostas/Respostas';
import { IEscapadorDeQuestao } from '@/dominio/processamento/escapador/questao/EscapadorDeQuestao';
import { IEscapadorDeQuestaoFactory } from '@/dominio/processamento/escapador/questao/EscapadorDeQuestaoFactory';
import { IProcessadorDeOpcao } from '../../opcao/ProcessadorDeOpcao';
import {
    ProcessadorDeQuestaoDeOpcoes,
    ErroNaoEncontrouEscapadorDaQuestao,
    ErroIdDaQuestaoDiferenteDoIdDoProcessador,
    ErroNaoEncontrouProcessadorDaOpcaoDaResposta,
    ErroDaRespostaNaoEncontrado,
} from '../ProcessadorDeQuestaoDeOpcoes';

describe('ProcessadorDeQuestaoDeOpcoes', () => {
    describe('processar', () => {
        test('lança erro se o id da resposta não for igual ao id do processador', () => {
            const { sut } = makeSut();
            const respostaFake = makeRespostaFake();
            respostaFake.id = 'questao2';
            const templateFake = 'Template ${questao2.categoria1}';
            expect(() => {
                sut.processar(respostaFake, templateFake);
            }).toThrow(ErroIdDaQuestaoDiferenteDoIdDoProcessador);
        });
        test('lança erro se não encontrar escapadores da questão', () => {
            const { sut, escapadorDeQuestaoFake } = makeSut();
            escapadorDeQuestaoFake.compararQuestao = () => false;
            const respostaFake = makeRespostaFake();
            const templateFake = 'Template ${questao2.categoria1}';
            expect(() => {
                sut.processar(respostaFake, templateFake);
            }).toThrow(ErroNaoEncontrouEscapadorDaQuestao);
        });
        test('lança erro se não encontrar processadores da questão', () => {
            const { sut, processadorStub } = makeSut();
            processadorStub.compararId = () => {
                return false;
            };
            const respostaFake = makeRespostaFake();
            const templateFake = 'Template ${questao1.categoria1}';
            expect(() => {
                sut.processar(respostaFake, templateFake);
            }).toThrow(ErroNaoEncontrouProcessadorDaOpcaoDaResposta);
        });
        test('lança erro se não encontrar texto de resposta com categoria do escapador', () => {
            const { sut, escapadorDeQuestaoFake } = makeSut();
            escapadorDeQuestaoFake.compararCategoria = () => false;
            const respostaFake = makeRespostaFake();
            const templateFake = 'Template ${questao1.categoria2}';
            expect(() => {
                sut.processar(respostaFake, templateFake);
            }).toThrow(ErroDaRespostaNaoEncontrado);
        });
        test('substitui o espaçador do template pelo texto da resposta', async () => {
            const { sut } = makeSut();
            const respostaFake = makeRespostaFake();
            const templateFake =
                'Template de ${questao1.categoria1} de ${questao2.categoria2}';
            const textoProcessado = sut.processar(respostaFake, templateFake);
            expect(textoProcessado).toBe(
                'Template de sistema de ${questao2.categoria2}',
            );
        });
    });
});

function makeSut() {
    const processadorStub = makeProcessadorDeOpcaoStub();
    const escapadorDeQuestaoFake = makeEscapadorDeQuestaoFake();
    const escapadorFactoryStub: IEscapadorDeQuestaoFactory = {
        criarEscapadoresDeTexto(texto: string): IEscapadorDeQuestao[] {
            return [escapadorDeQuestaoFake];
        },
    };
    const sut = new ProcessadorDeQuestaoDeOpcoes(
        'questao1',
        [processadorStub],
        escapadorFactoryStub,
    );
    return { sut, processadorStub, escapadorDeQuestaoFake };
}

function makeProcessadorDeOpcaoStub() {
    const processadorDeOpcaoStub: IProcessadorDeOpcao = {
        compararId(id: string) {
            return id === 'resposta1';
        },
        processar(resposta: RespostaDeOpcao) {
            return [{ categoria: 'categoria1', texto: 'sistema' }];
        },
    };
    return processadorDeOpcaoStub;
}

function makeRespostaFake() {
    const respostaFake: RespostaDeQuestaoDeOpcoes = {
        id: 'questao1',
        resposta: {
            id: 'resposta1',
        },
    };
    return respostaFake;
}

function makeEscapadorDeQuestaoFake() {
    const nomeDeEscapadorFake = makeNomeDeEscapadorFake();
    const escapadorDeQuestaoFake: IEscapadorDeQuestao = {
        getQuestaoId() {
            return nomeDeEscapadorFake;
        },
        compararQuestao(questaoId: string) {
            return questaoId === 'questao1';
        },
        compararCategoria(categoriaId: string) {
            return categoriaId === 'categoria1';
        },
        toString() {
            return '${questao1.categoria1}';
        },
    };
    return escapadorDeQuestaoFake;
}

function makeNomeDeEscapadorFake() {
    const nomeDeEscapadorFake = {
        toString() {
            return '';
        },
    };
    return nomeDeEscapadorFake;
}
