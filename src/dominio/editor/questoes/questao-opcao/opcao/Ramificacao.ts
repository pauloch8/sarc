import { IIdFormulario } from '@/dominio/comum/IdFormulario';
import { RamificacaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';

export interface IRamificacao {
    getIrPara(): 'avançar' | 'fim do formulário' | IIdFormulario;
    setIrPara(
        ramificacao: 'avançar' | 'fim do formulário' | IIdFormulario,
    ): void;
    gerarEspecificacao(): RamificacaoDTO;
}

export class Ramificacao implements IRamificacao {
    constructor(
        private irPara:
            | 'avançar'
            | 'fim do formulário'
            | IIdFormulario = 'avançar',
    ) {}

    getIrPara(): IIdFormulario | 'avançar' | 'fim do formulário' {
        return this.irPara;
    }

    setIrPara(ramificacao: IIdFormulario | 'avançar' | 'fim do formulário') {
        this.irPara = ramificacao;
    }

    gerarEspecificacao(): RamificacaoDTO {
        return {
            irPara: this.irPara.toString(),
        };
    }
}
