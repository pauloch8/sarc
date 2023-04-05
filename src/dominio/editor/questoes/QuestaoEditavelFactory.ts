import { QuestaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';
import { IQuestaoOpcaoEditavel } from './questao-opcao/QuestaoOpcaoEditavel';
import { IQuestaoSelecaoEditavel } from './questao-selecao/QuestaoSelecaoEditavel';
import { IQuestaoOpcaoEditavelFactory } from './questao-opcao/QuestaoOpcaoEditavelFactory';
import { IQuestaoSelecaoEditavelFactory } from './questao-selecao/QuestaoSelecaoEditavelFactory';

export interface IQuestaoEditavelFactory {
    criarDeEspecificacao(
        especificacao: QuestaoDTO,
        indice: number,
    ): IQuestaoOpcaoEditavel | IQuestaoSelecaoEditavel;
}

export class QuestaoEditavelFactory {
    constructor(
        private questaoOpcaoEditavelFactory: IQuestaoOpcaoEditavelFactory,
        private questaoSelecaoEditavelFactory: IQuestaoSelecaoEditavelFactory,
    ) {}

    criarDeEspecificacao(especificacao: QuestaoDTO, indice: number) {
        if (especificacao.tipo === 'opcao') {
            return this.questaoOpcaoEditavelFactory.criarDeEspecificacao(
                especificacao,
                indice,
            );
        } else if (especificacao.tipo === 'selecao') {
            return this.questaoSelecaoEditavelFactory.criarDeEspecificacao(
                especificacao,
                indice,
            );
        } else {
            throw new ErroTipoOpcaoInvalido(especificacao.tipo);
        }
    }
}

/**
 * Erro de um Tipo de Opção inváido na Especificação
 */
class ErroTipoOpcaoInvalido extends Error {
    constructor(tipo: string) {
        super(`Tipo de opção ${tipo} inválido`);
    }
}
