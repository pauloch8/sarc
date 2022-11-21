<script lang="ts">
import { Formulario } from '@/dominio/formulario/Formulario';
import { ProcessadorDeRespostaDeFormulario } from '@/dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormulario';
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
    <h1>{{ formulario.getTitulo() }}</h1>
    <h2 v-if="formulario.getSubtitulo()">
        {{ formulario.getSubtitulo() }}
    </h2>
    <template v-for="questao in formulario.getQuestoes()" :key="questao.rotulo">
        <questao-opcoes :questao="questao" />
    </template>
    {{ formulario.getRespostas() }}
    {{}}
</template>
