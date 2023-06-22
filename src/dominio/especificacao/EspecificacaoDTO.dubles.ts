import {
    EspecificacaoDTO,
    OpcaoValorDTO,
    QuestaoDTO,
    TextoDTO,
} from './EspecificacaoDTO';

export const especificacaoDTOFake: EspecificacaoDTO = {
    id: 'teste',
    listaQuestoes: [],
    listaModelos: [
        {
            id: 'teste',
            titulo: 'titulo',
            texto: 'template',
        },
    ],
    titulo: 'Teste',
};

export const makeOpcaoValorDtoFake = () => {
    const texto = makeTextoDtoFake();
    const opcaoFake: OpcaoValorDTO = {
        id: 'id-opcao',
        titulo: 'Label',
        ramificacao: { irPara: 'próximo' },
        listaTextos: [texto],
    };
    return opcaoFake;
};

export function makeOpcaoValorDTOFakeComId(id: string) {
    const textoFake = makeTextoDtoFake();
    const dto: OpcaoValorDTO = {
        id: 'opcao' + id,
        titulo: 'Opcao ' + id,
        ramificacao: {
            irPara: 'avancar',
        },
        listaTextos: [textoFake],
    };
    return dto;
}

export function makeQuestaoDtoFake() {
    const opcaoFake = makeOpcaoValorDtoFake();
    const questaoDtoFake: QuestaoDTO = {
        id: 'id',
        tipo: 'opcao',
        titulo: 'titulo',
        opcoes: [opcaoFake],
    };
    return questaoDtoFake;
}

export function makeArrayQuestoDtoFake() {
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

export function makeTextoDtoFake() {
    const textoFake: TextoDTO = {
        categoria: 'categoria1',
        texto: 'texto1',
    };
    return textoFake;
}
