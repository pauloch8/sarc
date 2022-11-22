import {
    OpcaoValorDTO,
    QuestaoDTO,
    TextoDTO,
} from '@/dominio/especificacao/EspecificacaoDTO';
import { QuestaoDeOpcoesFactory } from '../QuestaoDeOpcoesFactory';

describe('QuestaoDeOpcoesFactory', () => {
    describe('criarDeDto', () => {
        test('se dto tem valor padrão cria Questao com valor selecionado', () => {
            const { dtoFake, opcaoDtoFake2 } = makeQuestoDtoFake();
            const questao = QuestaoDeOpcoesFactory.criarDeDto(dtoFake);
            const opcaoSelecionada = questao.valorSelecionado;
            expect(opcaoSelecionada?.getId()).toBe(opcaoDtoFake2.id);
        });
    });
});

function makeQuestoDtoFake() {
    const opcaoDtoFake1 = makeOpcaoDtoFake('1');
    const opcaoDtoFake2 = makeOpcaoDtoFake('2');
    const dtoFake: QuestaoDTO = {
        id: 'teste',
        tipo: 'opcao',
        titulo: 'Teste',
        opcoes: [opcaoDtoFake1, opcaoDtoFake2],
        valorPadrao: 'opcao2',
    };
    return { dtoFake, opcaoDtoFake1, opcaoDtoFake2 };
}

function makeOpcaoDtoFake(id: string) {
    const textoFake = makeTextoFake();
    const dto: OpcaoValorDTO = {
        id: 'opcao' + id,
        label: 'Opcao ' + id,
        ramificacao: {
            irPara: 'avancar',
        },
        texto: [textoFake],
    };
    return dto;
}

function makeTextoFake() {
    const dto: TextoDTO = {
        categoria: 'categoria1',
        texto: 'texto1',
    };
    return dto;
}
