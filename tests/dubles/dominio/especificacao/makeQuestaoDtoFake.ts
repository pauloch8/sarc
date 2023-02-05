import { QuestaoOpcaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { makeOpcaoValorDtoFake } from './makeOpcaoValorDtoFake';
import { makeOpcaoValorDTOFakeComId } from './makeOpcaoValorDTOFakeComId';

export function makeQuestaoDtoFake() {
    const opcaoFake = makeOpcaoValorDtoFake();
    const questaoDtoFake: QuestaoOpcaoDTO = {
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
    const dtoFake: QuestaoOpcaoDTO = {
        id: 'teste',
        tipo: 'opcao',
        titulo: 'Teste',
        opcoes: [opcaoDtoFake1, opcaoDtoFake2],
        valorPadrao: 'opcao2',
    };
    return { dtoFake, opcaoDtoFake1, opcaoDtoFake2 };
}
