import { EspecificacaoDTO } from '../especificacao/EspecificacaoDTO';
import { IProcessadorDeQuestaoDeOpcoes } from './ProcessadorDeQuestaoDeOpcoes';
import { ProcessadorDeRespostaDeFormulario } from './ProcessadorDeRespostaDeFormulario';

export class ProcessadorFactory {
    static criarDeEspecificacao(especificacao: EspecificacaoDTO) {
        const processadoresDeQuestoes: IProcessadorDeQuestaoDeOpcoes[] = [];
        new ProcessadorDeRespostaDeFormulario(
            especificacao.id,
            processadoresDeQuestoes,
            especificacao.template,
        );
    }
}
