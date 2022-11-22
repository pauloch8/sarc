import { especificacao } from '@/apresentacao/assets/especificacao';
import { EscapadorDeQuestaoFactory } from '@/dominio/processamento/escapador/questao/EscapadorDeQuestaoFactory';
import { ProcessadorDeOpcaoFactory } from '@/dominio/processamento/processador/questoes-opcao/opcao/ProcessadorDeOpcaoFactory';
import { ProcessadorDeQuestaoDeOpcoesFactory } from '@/dominio/processamento/processador/questoes-opcao/questao/ProcessadorDeQuestaoDeOpcoesFactory';
import { ProcessadorDeRespostaDeFormularioFactory } from '@/dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormularioFactory';
import { TextoFactory } from '@/dominio/processamento/processador/texto/TextoFactory';

function criarProcessadorDeFormulario() {
    const textoFactory = new TextoFactory();
    const processadorDeOpcaoFactory = new ProcessadorDeOpcaoFactory(
        textoFactory,
    );
    const escapadorDeQuestaoFactory = new EscapadorDeQuestaoFactory();
    const processadorDeQuestaoDeOpcoesFactory =
        new ProcessadorDeQuestaoDeOpcoesFactory(
            escapadorDeQuestaoFactory,
            processadorDeOpcaoFactory,
        );
    const processadorFormularioFactory =
        new ProcessadorDeRespostaDeFormularioFactory(
            processadorDeQuestaoDeOpcoesFactory,
        );
    const processadorFormulario =
        processadorFormularioFactory.criarDeEspecificacao(especificacao);
    return processadorFormulario;
}

const processadorFormulario = criarProcessadorDeFormulario();

describe('Processamento', () => {
    test('processa a especificação', () => {
        const resposta = JSON.parse(
            '{ "id": "gerador-de-acordao", "respostasQuestoes": [ { "id": "especie", "resposta": { "id": "b31" } }, { "id": "tipoDeRecurso", "resposta": { "id": "re" } }, { "id": "admissibilidade", "resposta": { "id": "temp-cien", "variaveis": [ { "id": "dataRegistroDecisao", "resposta": "asdfasf" }, { "id": "dataInterposicaoRecurso", "resposta": "asdfahasdf" } ] } } ] }',
        );
        const retorno = processadorFormulario.processar(resposta);
        debugger;
    });
});
