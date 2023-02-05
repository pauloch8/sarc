import { ProcessadorDeOpcao } from './ProcessadorDeOpcao';
import { OpcaoValorDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { ITextoFactory } from '../../texto/TextoFactory';

export interface IProcessadorDeOpcaoFactory {
    criarDeEspecificacao(opcaoValorDto: OpcaoValorDTO[]): ProcessadorDeOpcao[];
}

export class ProcessadorDeOpcaoFactory implements IProcessadorDeOpcaoFactory {
    constructor(private textoFactory: ITextoFactory) {}

    criarDeEspecificacao(opcaoValorDto: OpcaoValorDTO[]) {
        const retorno = opcaoValorDto.map(dto => {
            const textos = this.textoFactory.criarDeEspecificacao(
                dto.listaTextos,
            );
            return new ProcessadorDeOpcao(dto.id, textos);
        });
        return retorno;
    }
}
