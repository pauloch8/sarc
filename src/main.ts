import { createApp } from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue';
import App from './apresentacao/App.vue';
import router from './apresentacao/router/router';
import { EscapadorDeQuestaoFactory } from './dominio/processamento/escapador/questao/EscapadorDeQuestaoFactory';
import { ProcessadorDeOpcaoFactory } from './dominio/processamento/processador/questoes-opcao/opcao/ProcessadorDeOpcaoFactory';
import { ProcessadorDeQuestaoDeOpcoesFactory } from './dominio/processamento/processador/questoes-opcao/questao/ProcessadorDeQuestaoFactory';
import { ProcessadorDeRespostaDeFormularioFactory } from './dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormularioFactory';
import { TextoFactory } from './dominio/processamento/processador/texto/TextoFactory';
import { especificacao } from './apresentacao/assets/especificacao';
import { FormularioFactory } from './dominio/formulario/FormularioFactory';
import { ProcessadorDeSelecaoFactory } from './dominio/processamento/processador/questoes-opcao/selecao/ProcessadorDeSelecaoFactory';
import { EditorFactory } from './dominio/editor/EditorFactory';
import { EspecificacaoDTO } from './dominio/especificacao/EspecificacaoDTO';

const processadorFormulario = criarProcessadorDeFormulario(especificacao);
const formulario = FormularioFactory.criarDaEspecificacao(especificacao);
const editor = criarEditor(especificacao);

createApp(App)
    .use(router)
    .use(CKEditor)
    .provide('processadorFormulario', processadorFormulario)
    .provide('formulario', formulario)
    .provide('editor', editor)
    .mount('#app');

function criarProcessadorDeFormulario(especificacao: EspecificacaoDTO) {
    const textoFactory = new TextoFactory();
    const processadorDeOpcaoFactory = new ProcessadorDeOpcaoFactory(
        textoFactory,
    );
    const processadorDeSelecaoFactory = new ProcessadorDeSelecaoFactory(
        textoFactory,
    );
    const escapadorDeQuestaoFactory = new EscapadorDeQuestaoFactory();
    const processadorDeQuestaoDeOpcoesFactory =
        new ProcessadorDeQuestaoDeOpcoesFactory(
            processadorDeOpcaoFactory,
            processadorDeSelecaoFactory,
        );
    const processadorFormularioFactory =
        new ProcessadorDeRespostaDeFormularioFactory(
            processadorDeQuestaoDeOpcoesFactory,
            escapadorDeQuestaoFactory,
        );
    const processadorFormulario =
        processadorFormularioFactory.criarDeEspecificacao(especificacao);
    return processadorFormulario;
}

function criarEditor(especificacao: EspecificacaoDTO) {
    const factory = new EditorFactory();
    const editor = factory.criarDaEspecificacao(especificacao);
    return editor;
}
