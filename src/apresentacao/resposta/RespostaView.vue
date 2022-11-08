<script lang="ts">
import { defineComponent } from 'vue';
import { gabarito } from '../assets/gabarito';
import { FormularioFactory } from '../../dominio/formulario/FormularioFactory';
import FormularioComponent from './FormularioComponent.vue';

const formulario = FormularioFactory.criarDeGabarito(gabarito);

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
    <formulario-component :formulario="formulario" />
</template>
