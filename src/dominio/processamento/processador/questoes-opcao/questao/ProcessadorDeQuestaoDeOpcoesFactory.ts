import { QuestaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { IEscapadorDeQuestaoFactory } from '@/dominio/processamento/escapador/questao/EscapadorDeQuestaoFactory';
import { IProcessadorDeOpcaoFactory } from '../opcao/ProcessadorDeOpcaoFactory';
import { ProcessadorDeQuestaoDeOpcoes } from './ProcessadorDeQuestaoDeOpcoes';

export interface IProcessadorDeQuestaoDeOpcoesFactory {
    criarDeEspecificacao(
        questoesDto: QuestaoDTO[],
    ): ProcessadorDeQuestaoDeOpcoes[];
}

export class ProcessadorDeQuestaoDeOpcoesFactory
    implements IProcessadorDeQuestaoDeOpcoesFactory
{
    constructor(
        private processadorDeOpcaoFactory: IProcessadorDeOpcaoFactory,
    ) {}

    criarDeEspecificacao(questoesDto: QuestaoDTO[]) {
        const retorno = questoesDto.map(dto => {
            if (dto.tipo !== 'opcao') {
                throw new ErroEsepcificacaoDaQuestaoDiferenteDeOpcao(dto.tipo);
            }
            if (!dto.opcoes?.length) {
                throw new ErroEspecificacaoDeQuestaoDeOpcoesNaoPossuiOpcoes();
            }
            const processadoresDeOpcoes =
                this.processadorDeOpcaoFactory.criarDeEspecificacao(dto.opcoes);
            return new ProcessadorDeQuestaoDeOpcoes(
                dto.id,
                processadoresDeOpcoes,
            );
        });
        return retorno;
    }
}

export class ErroEsepcificacaoDaQuestaoDiferenteDeOpcao extends Error {
    constructor(tipoRecebido: string) {
        super(`Tipo recebido ${tipoRecebido} é difernte de 'opção'`);
    }
}

export class ErroEspecificacaoDeQuestaoDeOpcoesNaoPossuiOpcoes extends Error {
    constructor() {
        super(`Especificação de questào de opções não possui opções`);
    }
}
