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
                const opcaoDto = dto as QuestaoDTO;
                if (!opcaoDto.opcoes?.length) {
                    throw new ErroQuestaoOpcaoSemOpcoes();
                }
                const processadores =
                    this.processadorDeOpcaoFactory.criarDeEspecificacao(
                        opcaoDto.opcoes,
                    );
                return new ProcessadorDeQuestaoDeOpcoes(
                    opcaoDto.id,
                    processadores,
                );
            } else if (dto.tipo === 'selecao') {
                const selecaoDto = dto as QuestaoDTO;
                if (!selecaoDto.opcoes) {
                    throw new ErroQuestaoSelecaoSemSelecoes();
                }
                const processadores =
                    this.processadorDeSelecaoFactory.criarDeEspecificacao(
                        selecaoDto.opcoes,
                    );
                return new ProcessadorDeQuestaoDeSelecoes(
                    selecaoDto.id,
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
            `Especificação da questão do tipo "opcao" não possui o atributo "opcoes"`,
        );
    }
}

export class ErroQuestaoSelecaoSemSelecoes extends Error {
    constructor() {
        super(
            `Especificação da questão do tipo "selecao" não possui o atributo "selecoes"`,
        );
    }
}

export class ErroTipoDeQuestaoNaoReconhecido extends Error {
    constructor(tipoRecebido: string) {
        super(`Tipo de questão "${tipoRecebido}" não reconhecido`);
    }
}

export class ErroEsepcificacaoDaQuestaoDiferenteDeOpcao extends Error {
    constructor(tipoRecebido: string) {
        super(`Tipo recebido "${tipoRecebido}" é difernte de "opção"`);
    }
}

export class ErroEspecificacaoDeQuestaoDeOpcoesNaoPossuiOpcoes extends Error {
    constructor() {
        super(`Especificação de questào de opções não possui opções`);
    }
}
