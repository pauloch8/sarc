<script lang="ts">
import { defineComponent } from 'vue';
import QuestaoOpcoes from './QuestaoOpcoesComponent.vue';
import { Formulario } from '@/dominio/formulario/Formulario';

export default defineComponent({
    name: 'FormularioComponent',
    props: {
        formulario: {
            type: Formulario,
            require: true,
        },
    },
    components: {
        QuestaoOpcoes,
    },
});
</script>

<template v-if="formulario">
    <h1>{{ formulario.titulo }}</h1>
    <template v-for="questao in formulario.questoes" :key="questao.rotulo">
        <questao-opcoes :questao="questao" />
    </template>
</template>
