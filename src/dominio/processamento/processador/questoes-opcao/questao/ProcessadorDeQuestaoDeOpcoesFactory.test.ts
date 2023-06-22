import { makeQuestaoDtoFake } from '@/dominio/especificacao/EspecificacaoDTO.dubles';
import { makeProcessadorDeOpcaoFactoryStub } from '../opcao/ProcessadorDeOpcaoFactory.dubles';
import { makeProcessadorDeSelecaoFactoryStub } from '../selecao/ProcessadorDeSelecaoFactory.dubles';
import { ProcessadorDeQuestaoDeOpcoes } from './ProcessadorDeQuestaoDeOpcoes';
import {
    ErroQuestaoOpcaoSemOpcoes,
    ProcessadorDeQuestaoDeOpcoesFactory,
} from './ProcessadorDeQuestaoDeOpcoesFactory';

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

            questaoDtoFake.opcoes = [];
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
