<script lang="ts">
import { especificacao } from '@/apresentacao/assets/especificacao';
import { defineComponent } from 'vue';
import FormularioComponent from './formulario/FormularioComponent.vue';
import RelatorioComponent from './relatorio/RelatorioComponent.vue';
import { Formulario } from '@/dominio/formulario/Formulario';
import { ProcessadorDeRespostaDeFormulario } from '@/dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormulario';

export default defineComponent({
    name: 'TelaResposta',
    inject: ['processadorFormulario', 'formulario'],
    components: {
        FormularioComponent,
        RelatorioComponent,
    },
    data() {
        const textoRelatorio = especificacao.template;
        return {
            textoRelatorio: textoRelatorio,
            modoFormulario: true,
        };
    },
    methods: {
        apresentarRelatorio(relatorio: string) {
            this.textoRelatorio = relatorio;
            this.modoFormulario = false;
        },
    },
});
</script>

<template>
    <main>
        <FormularioComponent
            v-if="modoFormulario"
            :formulario="formulario"
            :processadorFormulario="processadorFormulario"
            @gerou-relatorio="apresentarRelatorio"
        ></FormularioComponent>

        <RelatorioComponent
            v-if="!modoFormulario"
            :relatorio="textoRelatorio"
        ></RelatorioComponent>
    </main>
</template>
