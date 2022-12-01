import { createApp } from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue';
import App from './apresentacao/App.vue';
import router from './apresentacao/router/router';
import { EscapadorDeQuestaoFactory } from './dominio/processamento/escapador/questao/EscapadorDeQuestaoFactory';
import { ProcessadorDeOpcaoFactory } from './dominio/processamento/processador/questoes-opcao/opcao/ProcessadorDeOpcaoFactory';
import { ProcessadorDeQuestaoDeOpcoesFactory } from './dominio/processamento/processador/questoes-opcao/questao/ProcessadorDeQuestaoDeOpcoesFactory';
import { ProcessadorDeRespostaDeFormularioFactory } from './dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormularioFactory';
import { TextoFactory } from './dominio/processamento/processador/texto/TextoFactory';
import { especificacao } from './apresentacao/assets/especificacao';
import { FormularioFactory } from './dominio/formulario/FormularioFactory';

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
            escapadorDeQuestaoFactory,
        );
    const processadorFormulario =
        processadorFormularioFactory.criarDeEspecificacao(especificacao);
    return processadorFormulario;
}

const processadorFormulario = criarProcessadorDeFormulario();
const formulario = FormularioFactory.criarDaEspecificacao(especificacao);

createApp(App)
    .use(router)
    .use(CKEditor)
    .provide('processadorFormulario', processadorFormulario)
    .provide('formulario', formulario)
    .mount('#app');
