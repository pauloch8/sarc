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
    computed: {
        getTextos() {
            console.log('Chamou getTextos');
            try {
                const retorno = this.formulario.getTextos();
                console.log(retorno);
                return retorno;
            } catch (e) {
                return (e as Error).message;
            }
        },
    },
    components: {
        QuestaoOpcoes,
    },
});
</script>

<template v-if="formulario">
    <hgroup>
        <h1>{{ formulario.getTitulo() }}</h1>
        <h2 v-if="formulario.getSubtitulo()">
            {{ formulario.getSubtitulo() }}
        </h2>
    </hgroup>
    <template v-for="questao in formulario.getQuestoes()" :key="questao.rotulo">
        <questao-opcoes :questao="questao" />
    </template>
    {{ JSON.stringify(getTextos) }}
</template>
