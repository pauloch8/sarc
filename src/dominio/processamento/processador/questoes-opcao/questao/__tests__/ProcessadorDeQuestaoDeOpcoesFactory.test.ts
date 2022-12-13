import {
    OpcaoValorDTO,
    QuestaoDTO,
    TextoDTO,
} from '@/dominio/especificacao/EspecificacaoDTO';
import { IEscapadorDeQuestao } from '@/dominio/processamento/escapador/questao/EscapadorDeQuestao';
import { IEscapadorDeQuestaoFactory } from '@/dominio/processamento/escapador/questao/EscapadorDeQuestaoFactory';
import { IProcessadorDeOpcaoFactory } from '../../opcao/ProcessadorDeOpcaoFactory';
import { IProcessadorDeSelecaoFactory } from '../../selecao/ProcessadorDeSelecaoFactory';
import { ProcessadorDeQuestaoDeOpcoes } from '../ProcessadorDeQuestaoDeOpcoes';
import {
    ErroEsepcificacaoDaQuestaoDiferenteDeOpcao,
    ErroEspecificacaoDeQuestaoDeOpcoesNaoPossuiOpcoes,
    ErroQuestaoOpcaoSemOpcoes,
    ProcessadorDeQuestaoDeOpcoesFactory,
} from '../ProcessadorDeQuestaoFactory';

describe('ProcessadorDeQuestaoDeOpcoesFactory', () => {
    describe('criarDeEspecificacao', () => {
        test('retorna um processador', async () => {
            const sut = makeSut();
            const questaoDtoFake = makeQuestaoDtoFake();
            const processador = sut.criarDeEspecificacao([questaoDtoFake]);

            expect(processador[0]).toBeInstanceOf(ProcessadorDeQuestaoDeOpcoes);
        });

        test('lança erro se especificação não possuir opções', () => {
            const sut = makeSut();
            const questaoDtoFake = makeQuestaoDtoFake();
            questaoDtoFake.opcoes = [];
            expect(() => {
                sut.criarDeEspecificacao([questaoDtoFake]);
            }).toThrow(ErroQuestaoOpcaoSemOpcoes);

            questaoDtoFake.opcoes = undefined;
            expect(() => {
                sut.criarDeEspecificacao([questaoDtoFake]);
            }).toThrow(ErroQuestaoOpcaoSemOpcoes);
        });
    });
});

function makeSut() {
    const processadorDeOpcaoFactoryStub = makeProcessadorDeOpcaoFactoryStub();
    const processadorDeSelecaoFactoryStub =
        makeProcessadorDeSelecaoFactoryStub();
    const sut = new ProcessadorDeQuestaoDeOpcoesFactory(
        processadorDeOpcaoFactoryStub,
        processadorDeSelecaoFactoryStub,
    );
    return sut;
}

function makeEscapadorFactoryStub() {
    const escapadorFactoryStub: IEscapadorDeQuestaoFactory = {
        criarEscapadoresDeTexto(texto: string): IEscapadorDeQuestao[] {
            return [];
        },
    };
    return escapadorFactoryStub;
}

function makeQuestaoDtoFake() {
    const opcaoFake = makeOpcaoValorDtoFake();
    const questaoDtoFake: QuestaoDTO = {
        id: 'id',
        tipo: 'opcao',
        titulo: 'titulo',
        opcoes: [opcaoFake],
    };
    return questaoDtoFake;
}

function makeOpcaoValorDtoFake() {
    const texto = makeTextoDtoFake();
    const opcaoFake: OpcaoValorDTO = {
        id: 'id-opcao',
        label: 'Label',
        ramificacao: { irPara: 'próximo' },
        texto: [texto],
    };
    return opcaoFake;
}

function makeProcessadorDeOpcaoFactoryStub() {
    const processadorDeOpcaoFactoryStub: IProcessadorDeOpcaoFactory = {
        criarDeEspecificacao(opcaoValorDto: OpcaoValorDTO[]) {
            return [];
        },
    };
    return processadorDeOpcaoFactoryStub;
}

function makeProcessadorDeSelecaoFactoryStub() {
    const processadorDeOpcaoFactoryStub: IProcessadorDeSelecaoFactory = {
        criarDeEspecificacao(opcaoValorDto: OpcaoValorDTO[]) {
            return [];
        },
    };
    return processadorDeOpcaoFactoryStub;
}

function makeTextoDtoFake() {
    const textoFake: TextoDTO = {
        categoria: 'categoria1',
        texto: 'texto1',
    };
    return textoFake;
}
