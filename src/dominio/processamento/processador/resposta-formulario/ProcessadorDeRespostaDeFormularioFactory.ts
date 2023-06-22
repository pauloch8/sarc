import { EspecificacaoDTO } from '../../../especificacao/EspecificacaoDTO';
import { IEscapadorDeQuestaoFactory } from '../../../comum/escapador/questao/EscapadorDeQuestaoFactory';
import { IProcessadorDeQuestaoFactory } from '../questoes-opcao/questao/ProcessadorDeQuestaoDeOpcoesFactory';
import { ProcessadorDeRespostaDeFormulario } from './ProcessadorDeRespostaDeFormulario';

export class ProcessadorDeRespostaDeFormularioFactory {
    constructor(
        private questoesFactory: IProcessadorDeQuestaoFactory,
        private escapadorFactory: IEscapadorDeQuestaoFactory,
    ) {}

    criarDeEspecificacao(especificacao: EspecificacaoDTO) {
        const processadoresDeQuestoes =
            this.questoesFactory.criarDeEspecificacao(
                especificacao.listaQuestoes,
            );
        const processador = new ProcessadorDeRespostaDeFormulario(
            especificacao.id,
            processadoresDeQuestoes,
            this.escapadorFactory,
            especificacao.listaModelos,
        );
        return processador;
    }
}
