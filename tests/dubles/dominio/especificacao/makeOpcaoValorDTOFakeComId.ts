import { OpcaoValorDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { makeTextoDtoFake } from './makeTextoDtoFake';

export function makeOpcaoValorDTOFakeComId(id: string) {
    const textoFake = makeTextoDtoFake();
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
