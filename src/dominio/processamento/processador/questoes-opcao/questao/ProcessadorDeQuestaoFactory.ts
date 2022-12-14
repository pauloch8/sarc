import { QuestaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { IProcessadorDeOpcaoFactory } from '../opcao/ProcessadorDeOpcaoFactory';
import { IProcessadorDeSelecaoFactory } from '../selecao/ProcessadorDeSelecaoFactory';
import { IProcessadorDeQuestao } from './IProcessadorDeQuestao';
import { ProcessadorDeQuestaoDeOpcoes } from './ProcessadorDeQuestaoDeOpcoes';
import { ProcessadorDeQuestaoDeSelecoes } from './ProcessadorDeQuestaoDeSelecoes';

export interface IProcessadorDeQuestaoFactory {
    criarDeEspecificacao(questoesDto: QuestaoDTO[]): IProcessadorDeQuestao[];
}

export class ProcessadorDeQuestaoDeOpcoesFactory
    implements IProcessadorDeQuestaoFactory
{
    constructor(
        private processadorDeOpcaoFactory: IProcessadorDeOpcaoFactory,
        private processadorDeSelecaoFactory: IProcessadorDeSelecaoFactory,
    ) {}

    criarDeEspecificacao(questoesDto: QuestaoDTO[]) {
        const retorno = questoesDto.map(dto => {
            if (dto.tipo === 'opcao') {
                if (!dto.opcoes?.length) {
                    throw new ErroQuestaoOpcaoSemOpcoes();
                }
                const processadores =
                    this.processadorDeOpcaoFactory.criarDeEspecificacao(
                        dto.opcoes,
                    );
                return new ProcessadorDeQuestaoDeOpcoes(dto.id, processadores);
            } else if (dto.tipo === 'selecao') {
                if (!dto.selecoes) {
                    throw new ErroQuestaoSelecaoSemSelecoes();
                }
                const processadores =
                    this.processadorDeSelecaoFactory.criarDeEspecificacao(
                        dto.selecoes,
                    );
                return new ProcessadorDeQuestaoDeSelecoes(
                    dto.id,
                    processadores,
                );
            } else {
                throw new ErroTipoDeQuestaoNaoReconhecido(dto.tipo);
            }
        });
        return retorno;
    }
}

export class ErroQuestaoOpcaoSemOpcoes extends Error {
    constructor() {
        super(
            `Especifica????o da quest??o do tipo "opcao" n??o possui o atributo "opcoes"`,
        );
    }
}

export class ErroQuestaoSelecaoSemSelecoes extends Error {
    constructor() {
        super(
            `Especifica????o da quest??o do tipo "selecao" n??o possui o atributo "selecoes"`,
        );
    }
}

export class ErroTipoDeQuestaoNaoReconhecido extends Error {
    constructor(tipoRecebido: string) {
        super(`Tipo de quest??o "${tipoRecebido}" n??o reconhecido`);
    }
}

export class ErroEsepcificacaoDaQuestaoDiferenteDeOpcao extends Error {
    constructor(tipoRecebido: string) {
        super(`Tipo recebido "${tipoRecebido}" ?? difernte de "op????o"`);
    }
}

export class ErroEspecificacaoDeQuestaoDeOpcoesNaoPossuiOpcoes extends Error {
    constructor() {
        super(`Especifica????o de quest??o de op????es n??o possui op????es`);
    }
}
