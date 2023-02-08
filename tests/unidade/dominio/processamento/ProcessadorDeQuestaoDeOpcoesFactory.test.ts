import { ProcessadorDeQuestaoDeOpcoes } from '@/dominio/processamento/processador/questoes-opcao/questao/ProcessadorDeQuestaoDeOpcoes';
import {
    ErroQuestaoOpcaoSemOpcoes,
    ProcessadorDeQuestaoDeOpcoesFactory,
} from '@/dominio/processamento/processador/questoes-opcao/questao/ProcessadorDeQuestaoFactory';
import { makeQuestaoDtoFake } from '@/tests/dubles/dominio/especificacao/makeQuestaoDtoFake';
import { makeProcessadorDeOpcaoFactoryStub } from '@/tests/dubles/dominio/processamento/processador/questoes-opcao/opcao/makeProcessadorDeOpcaoFactoryStub';
import { makeProcessadorDeSelecaoFactoryStub } from '@/tests/dubles/dominio/processamento/processador/questoes-opcao/selecao/makeProcessadorDeSelecaoFactoryStub';

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
