<script lang="ts">
import { Formulario } from '@/dominio/formulario/Formulario';
import { defineComponent } from 'vue';
import QuestaoOpcoes from './QuestaoOpcoesComponent.vue';

export default defineComponent({
    name: 'FormularioComponent',
    props: {
        formulario: {
            type: Formulario,
            required: true,
        },
    },
    components: {
        QuestaoOpcoes,
    },
});
</script>

<template v-if="formulario">
    <hgroup>
        <h1>{{ formulario.titulo }}</h1>
        <h2 v-if="formulario.subtitulo">{{ formulario.subtitulo }}</h2>
    </hgroup>
    <template v-for="questao in formulario.questoes" :key="questao.rotulo">
        <questao-opcoes :questao="questao" />
    </template>
</template>
