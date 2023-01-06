import { createApp } from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue';
/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faArrowUp,
    faArrowDown,
    faTrash,
    faEdit,
} from '@fortawesome/free-solid-svg-icons';
/* camada de apresentação */
import App from './apresentacao/App.vue';
import router from './apresentacao/router/router';
/* camada de domínio */
import { EscapadorDeQuestaoFactory } from './dominio/processamento/escapador/questao/EscapadorDeQuestaoFactory';
import { ProcessadorDeOpcaoFactory } from './dominio/processamento/processador/questoes-opcao/opcao/ProcessadorDeOpcaoFactory';
import { ProcessadorDeQuestaoDeOpcoesFactory } from './dominio/processamento/processador/questoes-opcao/questao/ProcessadorDeQuestaoFactory';
import { ProcessadorDeRespostaDeFormularioFactory } from './dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormularioFactory';
import { TextoFactory } from './dominio/processamento/processador/texto/TextoFactory';
import { especificacao } from './apresentacao/assets/especificacao';
import { FormularioFactory } from './dominio/formulario/FormularioFactory';
import { ProcessadorDeSelecaoFactory } from './dominio/processamento/processador/questoes-opcao/selecao/ProcessadorDeSelecaoFactory';
import { FormularioEditorFactory } from './dominio/editor/FormularioEditorFactory';
import { EspecificacaoDTO } from './dominio/especificacao/EspecificacaoDTO';
import { TituloFactory } from './dominio/editor/TituloFactory';
import { IdFormularioFactory } from './dominio/editor/IdFormularioFactory';
import { SubtituloFactory } from './dominio/editor/SubtituloFactory';
import { QuestaoEditavelFactory } from './dominio/editor/QuestaoEditavelFactory';
import { OpcaoEditavelFactory } from './dominio/editor/OpcaoEditavelFactory';
import { TextoEditavelFactory } from './dominio/editor/TextoEditavelFactory';

/* Font Awesome */
library.add(faArrowUp, faArrowDown, faTrash, faEdit);

const processadorFormulario = criarProcessadorDeFormulario(especificacao);
const formulario = FormularioFactory.criarDaEspecificacao(especificacao);
const tituloFactory = new TituloFactory();
const subtituloFactory = new SubtituloFactory();
const idFormularioFactory = new IdFormularioFactory();
const formularioEditorFactory = new FormularioEditorFactory();
const questaoEditavelFactory = new QuestaoEditavelFactory();
const opcaoEditavelFactory = new OpcaoEditavelFactory();
const textoEditavelFactory = new TextoEditavelFactory();

createApp(App)
    .use(router)
    .use(CKEditor)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .provide('processadorFormulario', processadorFormulario)
    .provide('formulario', formulario)
    .provide('formularioEditorFactory', formularioEditorFactory)
    .provide('questaoEditavelFactory', questaoEditavelFactory)
    .provide('opcaoEditavelFactory', opcaoEditavelFactory)
    .provide('textoEditavelFactory', textoEditavelFactory)
    .provide('tituloFactory', tituloFactory)
    .provide('subtituloFactory', subtituloFactory)
    .provide('idFormularioFactory', idFormularioFactory)
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
