<script lang="ts">
import { ProcessadorDeRespostaDeFormulario } from '@/dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormulario';
import { ProcessadorDeRespostaDeFormularioFactory } from '@/dominio/processamento/processador/ProcessadorDeRespostaDeFormularioFactory';
import { defineComponent } from 'vue';
import { FormularioFactory } from '../../dominio/formulario/FormularioFactory';
import { especificacao } from '../assets/especificacao';
import FormularioComponent from './FormularioComponent.vue';

export default defineComponent({
    name: 'RespostaView',
    data() {
        const processador =
            ProcessadorDeRespostaDeFormularioFactory.criarDeEspecificacao(
                especificacao,
            );
        const formulario =
            FormularioFactory.criarDaEspecificacao(especificacao);
        return {
            formulario,
        };
    },
    components: {
        FormularioComponent,
    },
});
</script>

<template>
    <main>
        <formulario-component :formulario="formulario" />
    </main>
</template>
