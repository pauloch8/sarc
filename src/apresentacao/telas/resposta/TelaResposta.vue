<script lang="ts">
import { especificacao } from '@/apresentacao/assets/especificacao';
import { TextoProcessado } from '@/dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormulario';
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
        const data = {
            textosProcessados: [] as TextoProcessado[],
            modoFormulario: true,
        };
        return data;
    },
    methods: {
        gerouRelatorio(textosProcessados: TextoProcessado[]) {
            this.textosProcessados = textosProcessados;
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
            <div v-if="!modoFormulario">
                <template v-for="textoRelatorio in textosProcessados">
                    <RelatorioComponent
                        v-if="!modoFormulario"
                        :key="textoRelatorio.id"
                        :relatorio="textoRelatorio"
                    ></RelatorioComponent>
                </template>
                <button @click="voltouParaFormulario">
                    Voltar para o Formulário
                </button>
            </div>
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
