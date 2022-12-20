import { OpcaoValorDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { makeTextoDtoFake } from './makeTextoDtoFake';

export const makeOpcaoValorDtoFake = () => {
    const texto = makeTextoDtoFake();
    const opcaoFake: OpcaoValorDTO = {
        id: 'id-opcao',
        label: 'Label',
        ramificacao: { irPara: 'próximo' },
        texto: [texto],
    };
    return opcaoFake;
};
