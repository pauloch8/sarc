<script lang="ts">
import { Formulario } from '@/dominio/formulario/Formulario';
import { QuestaoDeOpcoes } from '@/dominio/formulario/QuestaoDeOpcoes';
import { defineComponent } from 'vue';
import QuestaoOpcoesComponent from './QuestaoOpcoesComponent.vue';

export default defineComponent({
    name: 'FormularioComponent',
    props: { formulario: { type: Formulario, required: true } },
    data() {
        return { QuestaoDeOpcoes };
    },
    components: {
        QuestaoOpcoesComponent,
    },
});
</script>

<template>
    <h1>{{ formulario.titulo }}</h1>
    <template v-for="questao in formulario.questoes" :key="questao.rotulo">
        <questao-opcoes-component
            v-if="questao instanceof QuestaoDeOpcoes"
            :questao="questao"
        />
    </template>
</template>
