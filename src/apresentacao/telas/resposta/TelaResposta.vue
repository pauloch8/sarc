<script lang="ts">
import { especificacao } from '@/apresentacao/assets/especificacao';
import { defineComponent } from 'vue';
import FormularioComponent from './formulario/FormularioComponent.vue';
import RelatorioComponent from './relatorio/RelatorioComponent.vue';

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
        gerouRelatorio(relatorio: string) {
            this.textoRelatorio = relatorio;
            this.modoFormulario = false;
        },
        voltouParaFormulario() {
            this.modoFormulario = true;
        },
    },
});
</script>

<template>
    <main>
        <Transition>
            <FormularioComponent
                v-if="modoFormulario"
                :formulario="formulario"
                :processadorFormulario="processadorFormulario"
                @gerou-relatorio="gerouRelatorio"
            ></FormularioComponent>
        </Transition>

        <Transition>
            <RelatorioComponent
                v-if="!modoFormulario"
                :relatorio="textoRelatorio"
                @voltou-para-formulario="voltouParaFormulario"
            ></RelatorioComponent>
        </Transition>
    </main>
</template>

<style scoped>
.v-enter-from {
    transform: translateX(200px);
    opacity: 0;
}

.v-enter-active {
    transition: all 0.3s ease-out 0.3s;
}

.v-leave-active {
    transition: all 0.3s ease-in;
}

.v-leave-to {
    transform: translateX(-200px);
    opacity: 0;
}
</style>
