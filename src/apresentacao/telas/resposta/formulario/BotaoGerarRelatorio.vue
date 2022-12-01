<script lang="ts">
import { Formulario } from '@/dominio/formulario/Formulario';
import { ProcessadorDeRespostaDeFormulario } from '@/dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormulario';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FormularioComponent',
    props: {
        formulario: {
            type: Formulario,
            required: true,
        },
        processadorFormulario: {
            type: ProcessadorDeRespostaDeFormulario,
            required: true,
        },
    },
    data() {
        return {
            esteFormulario: this.formulario,
            erroGerarRespostas: '',
        };
    },
    methods: {
        gerar() {
            this.erroGerarRespostas = '';
            try {
                const respostas = this.esteFormulario.getRespostas();
                const texto = this.processadorFormulario.processar(respostas);
                this.$emit('gerouRelatorio', texto);
            } catch (e) {
                this.erroGerarRespostas = (e as Error).message;
            }
        },
    },
    emits: ['gerouRelatorio'],
});
</script>

<template>
    <article class="alerta" v-if="erroGerarRespostas">
        {{ erroGerarRespostas }}
    </article>
    <button @click="gerar">Gerar Relatório</button>
</template>

<style scoped>
.alerta {
    background-color: brown;
    color: white;
}
</style>
