<script lang="ts">
import { defineComponent } from 'vue';
import FormularioComponent from './formulario/FormularioComponent.vue';

export default defineComponent({
    name: 'TelaResposta',
    inject: ['processadorFormulario', 'formulario'],
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
