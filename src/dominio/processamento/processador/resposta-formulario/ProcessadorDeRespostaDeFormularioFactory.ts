import { EspecificacaoDTO } from '../../../especificacao/EspecificacaoDTO';
import { IProcessadorDeQuestaoDeOpcoesFactory } from '../questoes-opcao/questao/ProcessadorDeQuestaoDeOpcoesFactory';
import { ProcessadorDeRespostaDeFormulario } from './ProcessadorDeRespostaDeFormulario';

export class ProcessadorDeRespostaDeFormularioFactory {
    constructor(
        private questoesFactory: IProcessadorDeQuestaoDeOpcoesFactory,
    ) {}

    criarDeEspecificacao(especificacao: EspecificacaoDTO) {
        const processadoresDeQuestoes =
            this.questoesFactory.criarDeEspecificacao(especificacao.questoes);
        const processador = new ProcessadorDeRespostaDeFormulario(
            especificacao.id,
            processadoresDeQuestoes,
            especificacao.template,
        );
        return processador;
    }
}
