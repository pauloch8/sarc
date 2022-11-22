<script lang="ts">
import { especificacao } from '@/apresentacao/assets/especificacao';
import { FormularioFactory } from '@/dominio/formulario/FormularioFactory';
import { EscapadorDeQuestaoFactory } from '@/dominio/processamento/escapador/questao/EscapadorDeQuestaoFactory';
import { ProcessadorDeOpcaoFactory } from '@/dominio/processamento/processador/questoes-opcao/opcao/ProcessadorDeOpcaoFactory';
import { ProcessadorDeQuestaoDeOpcoesFactory } from '@/dominio/processamento/processador/questoes-opcao/questao/ProcessadorDeQuestaoDeOpcoesFactory';
import { ProcessadorDeRespostaDeFormularioFactory } from '@/dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormularioFactory';
import { TextoFactory } from '@/dominio/processamento/processador/texto/TextoFactory';
import { defineComponent } from 'vue';

import FormularioComponent from './FormularioComponent.vue';

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
const formulario = FormularioFactory.criarDaEspecificacao(especificacao);

export default defineComponent({
    data() {
        return { processadorFormulario, formulario };
    },
    name: 'TelaResposta',
    // inject: ['processadorFormulario', 'formulario'],
    components: {
        FormularioComponent,
    },
});
</script>

<template>
    <main>
        <formulario-component
            :formulario="formulario"
            :processador-formulario="processadorFormulario"
        />
    </main>
</template>
