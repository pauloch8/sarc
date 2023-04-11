import { IRamificacao, Ramificacao } from './Ramificacao';
import { RamificacaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';

export interface IRamificacaoFactory {
    criarDeEspecificacao(ramificacaoDto?: RamificacaoDTO): IRamificacao;
}

export class RamificacaoFactory implements IRamificacaoFactory {
    criarDeEspecificacao(ramificacaoDto?: RamificacaoDTO): IRamificacao {
        return new Ramificacao(ramificacaoDto?.irPara);
    }
}
