import { especificacao } from '@/apresentacao/assets/especificacao';
import { EscapadorDeQuestaoFactory } from '@/dominio/comum/escapador/questao/EscapadorDeQuestaoFactory';
import { ProcessadorDeOpcaoFactory } from '@/dominio/processamento/processador/questoes-opcao/opcao/ProcessadorDeOpcaoFactory';
import { ProcessadorDeQuestaoDeOpcoesFactory } from '@/dominio/processamento/processador/questoes-opcao/questao/ProcessadorDeQuestaoFactory';
import { ProcessadorDeSelecaoFactory } from '@/dominio/processamento/processador/questoes-opcao/selecao/ProcessadorDeSelecaoFactory';
import { ProcessadorDeRespostaDeFormularioFactory } from '@/dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormularioFactory';
import { TextoFactory } from '@/dominio/processamento/processador/texto/TextoFactory';

function criarProcessadorDeFormulario() {
    const textoFactory = new TextoFactory();
    const processadorDeOpcaoFactory = new ProcessadorDeOpcaoFactory(
        textoFactory,
    );
    const processadorDeSelecaoFactory = new ProcessadorDeSelecaoFactory(
        textoFactory,
    );
    const processadorDeQuestaoDeOpcoesFactory =
        new ProcessadorDeQuestaoDeOpcoesFactory(
            processadorDeOpcaoFactory,
            processadorDeSelecaoFactory,
        );
    const escapadorDeQuestaoFactory = new EscapadorDeQuestaoFactory();
    const processadorFormularioFactory =
        new ProcessadorDeRespostaDeFormularioFactory(
            processadorDeQuestaoDeOpcoesFactory,
            escapadorDeQuestaoFactory,
        );
    const processadorFormulario =
        processadorFormularioFactory.criarDeEspecificacao(especificacao);
    return processadorFormulario;
}

const processadorFormulario = criarProcessadorDeFormulario();

describe('Processamento', () => {
    xtest('processa a especificação', () => {
        const resposta = JSON.parse(
            '{"id":"gerador-de-acordao","respostasQuestoes":[{"id":"tipoDeRecurso","resposta":{"id":"ro"}},{"id":"especie-ro","resposta":{"id":"b31"}},{"id":"motivo-ro-b31","resposta":{"id":"acaoJudicial","variaveis":[{"id":"numAcaoJudicial","resposta":"asdf"}]}},{"id":"procurador","resposta":{"id":"nao"}},{"id":"admissibilidade","resposta":{"id":"temp"}}]}',
        );
        const retorno = processadorFormulario.processar(resposta);
    });
});
