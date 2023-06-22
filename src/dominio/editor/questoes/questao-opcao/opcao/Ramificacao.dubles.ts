import { IIdFormulario } from '@/dominio/comum/IdFormulario';
import { RamificacaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { IRamificacao } from './Ramificacao';

export class RamificacaoDummy implements IRamificacao {
    getIrPara(): IIdFormulario | 'avançar' | 'fim do formulário' {
        return 'avançar';
    }
    setIrPara(
        ramificacao: IIdFormulario | 'avançar' | 'fim do formulário',
    ): void {
        return;
    }
    gerarEspecificacao(): RamificacaoDTO {
        throw new Error('Method not implemented.');
    }
}
