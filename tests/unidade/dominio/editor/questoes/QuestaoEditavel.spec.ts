import { QuestaoOpcaoEditavel } from '@/dominio/editor/questoes/questao-opcao/QuestaoOpcaoEditavel';
import { EscapadorDeQuestaoToStringStub } from '@/tests/dubles/dominio/comum/escapador/questao/EscapadorDeQuestaoDubles';
import { EscapadorDeQuestaoFactoryCriaDeTituloCategoriaStub } from '@/tests/dubles/dominio/comum/escapador/questao/EscapadorDeQuestaoFactoryDubles';
import { IdFormularioDummy } from '@/tests/dubles/dominio/comum/IdFormularioDubles';
import { TituloDummy } from '@/tests/dubles/dominio/comum/TituloDubles';
import { ListaDeOpcoesEditavelDummy } from '@/tests/dubles/dominio/editor/questoes/OpcaoEditavelDubles';

describe('QuestaoEditavel', () => {
    test('gera escapadores de questão', () => {
        const sut = new QuestaoOpcaoEditavel(
            new IdFormularioDummy(),
            new TituloDummy(),
            0,
            new ListaDeOpcoesEditavelDummy(),
            new EscapadorDeQuestaoFactoryCriaDeTituloCategoriaStub(),
        );
        const escapadores = sut.getEscapadores();
        expect(escapadores[0]).toBeInstanceOf(EscapadorDeQuestaoToStringStub);
    });
});
