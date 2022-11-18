<script lang="ts">
import { defineComponent } from 'vue';

import { FormularioFactory } from '../../dominio/formulario/FormularioFactory';
import { especificacao } from '../assets/especificacao';
import FormularioComponent from './FormularioComponent.vue';

const formulario = FormularioFactory.criarDaEspecificacao(especificacao);

export default defineComponent({
    name: 'RespostaView',
    data() {
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
