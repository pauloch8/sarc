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
import { EscapadorDeQuestaoFactory } from './dominio/comum/escapador/questao/EscapadorDeQuestaoFactory';
import { ProcessadorDeOpcaoFactory } from './dominio/processamento/processador/questoes-opcao/opcao/ProcessadorDeOpcaoFactory';
import { ProcessadorDeQuestaoDeOpcoesFactory } from './dominio/processamento/processador/questoes-opcao/questao/ProcessadorDeQuestaoFactory';
import { ProcessadorDeRespostaDeFormularioFactory } from './dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormularioFactory';
import { TextoFactory } from './dominio/processamento/processador/texto/TextoFactory';
import { especificacao } from '@/dominio/especificacao/assets/especificacao';
import { FormularioFactory } from './dominio/formulario/FormularioFactory';
import { ProcessadorDeSelecaoFactory } from './dominio/processamento/processador/questoes-opcao/selecao/ProcessadorDeSelecaoFactory';
import { FormularioEditorFactory } from './dominio/editor/FormularioEditorFactory';
import { EspecificacaoDTO } from './dominio/especificacao/EspecificacaoDTO';
import { TituloFactory } from './dominio/comum/TituloFactory';
import { IdFormularioFactory } from './dominio/comum/IdFormularioFactory';
import { SubtituloFactory } from './dominio/comum/SubtituloFactory';
import { QuestaoOpcaoEditavelFactory } from './dominio/editor/questoes/questao-opcao/QuestaoOpcaoEditavelFactory';
import { OpcaoEditavelFactory } from './dominio/editor/questoes/questao-opcao/opcao/OpcaoEditavelFactory';
import { TextoEditavelFactory } from './dominio/editor/questoes/comum/texto/TextoEditavelFactory';
import { TextoModeloFactory } from './dominio/comum/TextoModeloFactory';
import { RemoveHtmlStringStrip } from './infrastrutura/portas/remove-html/RemoveHtmlStringStrip';
import { VariavelEditavelFactory } from './dominio/editor/questoes/comum/variavel/VariavelEditavelFactory';
import { TipoVariavelRepositoryEmMemoria } from './infrastrutura/portas/memoria/TipoVariavelRepositoryEmMemoria';
import { TipoVariavelFactory } from './dominio/editor/questoes/comum/variavel/tipo-variavel/TipoVariavelFactory';
import { EscapadorDeVariavelFactory } from './dominio/comum/escapador/variavel/EscapadorDeVariavelFactory';
import { ModeloEditavelFactory } from './dominio/editor/modelo/ModeloEditavelFactory';
import { EdicaoDeFormularioService } from './aplicacao/EdicaoDeFormularioService';
import { EspecificacaoRepositoryLocalStorageExemploStub } from '@/dominio/especificacao/EspecificacaoRepositoryLocalStorageExemploStub';

/* Font Awesome */
library.add(faArrowUp, faArrowDown, faTrash, faEdit);

const processadorFormulario = criarProcessadorDeFormulario(especificacao);
const formulario = FormularioFactory.criarDaEspecificacao(especificacao);
const tituloFactory = new TituloFactory();
const subtituloFactory = new SubtituloFactory();
const idFormularioFactory = new IdFormularioFactory();
const escapadorDeQuestaoFactory = new EscapadorDeQuestaoFactory();
const escapadorDeVariavelFactory = new EscapadorDeVariavelFactory();
const removeHtml = new RemoveHtmlStringStrip();
const textoModeloFactory = new TextoModeloFactory(
    removeHtml,
    escapadorDeVariavelFactory,
);
const textoEditavelFactory = new TextoEditavelFactory(textoModeloFactory);
const variavelEditavelFactory = new VariavelEditavelFactory(
    escapadorDeVariavelFactory,
);
const opcaoEditavelFactory = new OpcaoEditavelFactory(
    textoEditavelFactory,
    variavelEditavelFactory,
);
const questaoEditavelFactory = new QuestaoOpcaoEditavelFactory(
    escapadorDeQuestaoFactory,
    opcaoEditavelFactory,
);
const formularioEditorFactory = new FormularioEditorFactory(
    escapadorDeVariavelFactory,
    removeHtml,
    questaoEditavelFactory,
);
const tipoVariavelFactory = new TipoVariavelFactory();
const tipoVariavelRepository = new TipoVariavelRepositoryEmMemoria(
    tipoVariavelFactory,
);
const modeloEditavelFactory = new ModeloEditavelFactory();
const especificacaoRepository =
    new EspecificacaoRepositoryLocalStorageExemploStub();
const edicaoDeFormularioService = new EdicaoDeFormularioService(
    especificacaoRepository,
    formularioEditorFactory,
);

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
    .provide('textoModeloFactory', textoModeloFactory)
    .provide('escapadorDeVariavelFactory', escapadorDeVariavelFactory)
    .provide('variavelEditavelFactory', variavelEditavelFactory)
    .provide('tituloFactory', tituloFactory)
    .provide('subtituloFactory', subtituloFactory)
    .provide('idFormularioFactory', idFormularioFactory)
    .provide('tipoVariavelRepository', tipoVariavelRepository)
    .provide('modeloEditavelFactory', modeloEditavelFactory)
    .provide('escapadorDeQuestaoFactory', escapadorDeQuestaoFactory)
    .provide('edicaoDeFormularioService', edicaoDeFormularioService)
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
