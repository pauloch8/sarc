import { OpcaoValorDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { makeTextoDtoFake } from './makeTextoDtoFake';

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
