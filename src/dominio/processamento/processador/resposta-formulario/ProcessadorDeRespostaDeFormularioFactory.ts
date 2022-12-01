import { EspecificacaoDTO } from '../../../especificacao/EspecificacaoDTO';
import { IEscapadorDeQuestaoFactory } from '../../escapador/questao/EscapadorDeQuestaoFactory';
import { IProcessadorDeQuestaoDeOpcoesFactory } from '../questoes-opcao/questao/ProcessadorDeQuestaoDeOpcoesFactory';
import { ProcessadorDeRespostaDeFormulario } from './ProcessadorDeRespostaDeFormulario';

export class ProcessadorDeRespostaDeFormularioFactory {
    constructor(
        private questoesFactory: IProcessadorDeQuestaoDeOpcoesFactory,
        private escapadorFactory: IEscapadorDeQuestaoFactory,
    ) {}

    criarDeEspecificacao(especificacao: EspecificacaoDTO) {
        const processadoresDeQuestoes =
            this.questoesFactory.criarDeEspecificacao(especificacao.questoes);
        const processador = new ProcessadorDeRespostaDeFormulario(
            especificacao.id,
            processadoresDeQuestoes,
            this.escapadorFactory,
            especificacao.template,
        );
        return processador;
    }
}
