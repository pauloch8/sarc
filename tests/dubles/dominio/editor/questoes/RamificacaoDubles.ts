import { IIdFormulario } from '@/dominio/comum/IdFormulario';
import { IRamificacao } from '@/dominio/editor/questoes/questao-opcao/opcao/Ramificacao';

export class RamificacaoDummy implements IRamificacao {
    getIrPara(): IIdFormulario | 'avançar' | 'fim do formulário' {
        return 'avançar';
    }
    setIrPara(
        ramificacao: IIdFormulario | 'avançar' | 'fim do formulário',
    ): void {
        return;
    }
}
