import { ProcessadorDeSelecao } from './ProcessadorDeSelecao';
import { OpcaoValorDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { ITextoFactory } from '../../texto/TextoFactory';

export interface IProcessadorDeSelecaoFactory {
    criarDeEspecificacao(
        selecaoValorDto: OpcaoValorDTO[],
    ): ProcessadorDeSelecao[];
}

export class ProcessadorDeSelecaoFactory
    implements IProcessadorDeSelecaoFactory
{
    constructor(private textoFactory: ITextoFactory) {}

    criarDeEspecificacao(opcaoValorDto: OpcaoValorDTO[]) {
        const retorno = opcaoValorDto.map(dto => {
            const textos = this.textoFactory.criarDeEspecificacao(dto.texto);
            return new ProcessadorDeSelecao(dto.id, textos);
        });
        return retorno;
    }
}
