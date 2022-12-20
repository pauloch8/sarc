import { QuestaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { QuestaoDeOpcoesFactory } from '@/dominio/formulario/questoes/opcoes/QuestaoDeOpcoesFactory';
import { makeOpcaoValorDTOFakeComId } from '@/tests/dubles/dominio/especificacao/makeOpcaoValorDTOFakeComId';

describe('QuestaoDeOpcoesFactory', () => {
    describe('criarDeDto', () => {
        test('se dto tem valor padrão cria Questao com valor selecionado', () => {
            const { dtoFake, opcaoDtoFake2 } = makeQuestoDtoFake();
            const questao = QuestaoDeOpcoesFactory.criarDeDto(dtoFake);
            const opcaoSelecionada = questao.getValorSelecionado();
            expect(opcaoSelecionada?.getId()).toBe(opcaoDtoFake2.id);
        });
    });
});

function makeQuestoDtoFake() {
    const opcaoDtoFake1 = makeOpcaoValorDTOFakeComId('1');
    const opcaoDtoFake2 = makeOpcaoValorDTOFakeComId('2');
    const dtoFake: QuestaoDTO = {
        id: 'teste',
        tipo: 'opcao',
        titulo: 'Teste',
        opcoes: [opcaoDtoFake1, opcaoDtoFake2],
        valorPadrao: 'opcao2',
    };
    return { dtoFake, opcaoDtoFake1, opcaoDtoFake2 };
}
