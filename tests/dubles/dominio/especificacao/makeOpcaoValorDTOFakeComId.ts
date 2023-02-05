import { OpcaoValorDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { makeTextoDtoFake } from './makeTextoDtoFake';

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
