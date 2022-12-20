import { QuestaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { makeOpcaoValorDtoFake } from './makeOpcaoValorDtoFake';

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
