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
import { ProcessadorDeQuestaoDeOpcoesFactory } from './dominio/processamento/processador/questoes-opcao/questao/ProcessadorDeQuestaoDeOpcoesFactory';
import { ProcessadorDeRespostaDeFormularioFactory } from './dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormularioFactory';
import { TextoFactory } from './dominio/processamento/processador/texto/TextoFactory';
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
import { EspecificacaoRepositoryLocalStorageExemploStub } from '@/dominio/especificacao/EspecificacaoRepositoryLocalStorageExemploStub';
import { QuestaoSelecaoEditavelFactory } from './dominio/editor/questoes/questao-selecao/QuestaoSelecaoEditavelFactory';
import { QuestaoEditavelFactory } from './dominio/editor/questoes/QuestaoEditavelFactory';
import { SelecaoEditavelFactory } from './dominio/editor/questoes/questao-selecao/selecao/SelecaoEditavelFactory';
import { RamificacaoFactory } from './dominio/editor/questoes/questao-opcao/opcao/RamificacaoFactory';

/* Font Awesome */
library.add(faArrowUp, faArrowDown, faTrash, faEdit);

const processadorFormularioFactory = criarProcessadorDeFormularioFactory();
const formularioFactory = new FormularioFactory();
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
const ramificacaoFactory = new RamificacaoFactory();
const opcaoEditavelFactory = new OpcaoEditavelFactory(
    textoEditavelFactory,
    variavelEditavelFactory,
    ramificacaoFactory,
);
const selecaoEditavelFactory = new SelecaoEditavelFactory(
    textoEditavelFactory,
    variavelEditavelFactory,
);
const questaoOpcaoEditavelFactory = new QuestaoOpcaoEditavelFactory(
    escapadorDeQuestaoFactory,
    opcaoEditavelFactory,
);
const questaoSelecaoEditavelFactory = new QuestaoSelecaoEditavelFactory(
    escapadorDeQuestaoFactory,
    opcaoEditavelFactory,
);
const questaoEditavelFactory = new QuestaoEditavelFactory(
    questaoOpcaoEditavelFactory,
    questaoSelecaoEditavelFactory,
);
const tipoVariavelFactory = new TipoVariavelFactory();
const tipoVariavelRepository = new TipoVariavelRepositoryEmMemoria(
    tipoVariavelFactory,
);
const modeloEditavelFactory = new ModeloEditavelFactory();
const formularioEditorFactory = new FormularioEditorFactory(
    escapadorDeVariavelFactory,
    removeHtml,
    questaoEditavelFactory,
);
const especificacaoRepository =
    new EspecificacaoRepositoryLocalStorageExemploStub();

createApp(App)
    .use(router)
    .use(CKEditor)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .provide('processadorFormularioFactory', processadorFormularioFactory)
    .provide('formularioFactory', formularioFactory)
    .provide('formularioEditorFactory', formularioEditorFactory)
    .provide('questaoEditavelFactory', questaoEditavelFactory)
    .provide('questaoOpcaoEditavelFactory', questaoOpcaoEditavelFactory)
    .provide('opcaoEditavelFactory', opcaoEditavelFactory)
    .provide('selecaoEditavelFactory', selecaoEditavelFactory)
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
    .provide('especificacaoRepository', especificacaoRepository)
    .mount('#app');

function criarProcessadorDeFormularioFactory() {
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
    return processadorFormularioFactory;
}
