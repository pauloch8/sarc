import { IdFormularioDummy } from '@/dominio/comum/IdFormulario.dubles';
import { TituloDummy } from '@/dominio/comum/Titulo.dubles';
import { EscapadorDeQuestaoToStringStub } from '@/dominio/comum/escapador/questao/EscapadorDeQuestao.dubles';
import { EscapadorDeQuestaoFactoryCriaDeTituloCategoriaStub } from '@/dominio/comum/escapador/questao/EscapadorDeQuestaoFactory.dubles';
import { QuestaoOpcaoEditavel } from './QuestaoOpcaoEditavel';
import { ListaDeOpcoesEditavelDummy } from './opcao/OpcaoEditavel.dubles';

describe('QuestaoOpcaoEditavel', () => {
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
