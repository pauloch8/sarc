import { makeArrayQuestoDtoFake } from '@/dominio/especificacao/EspecificacaoDTO.dubles';
import { QuestaoDeOpcoesFactory } from './QuestaoDeOpcoesFactory';

describe('QuestaoDeOpcoesFactory', () => {
    describe('criarDeDto', () => {
        test('se dto tem valor padrão cria Questao com valor selecionado', () => {
            const { dtoFake, opcaoDtoFake2 } = makeArrayQuestoDtoFake();
            const questao = QuestaoDeOpcoesFactory.criarDeDto(dtoFake);
            const opcaoSelecionada = questao.getValorSelecionado();
            expect(opcaoSelecionada?.getId()).toBe(opcaoDtoFake2.id);
        });
    });
});
