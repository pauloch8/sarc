<script lang="ts">
import { defineComponent } from 'vue';

import { FormularioFactory } from '../../dominio/formulario/FormularioFactory';
import { gabarito } from '../assets/gabarito';
import QuestaoOpcoes from './QuestaoOpcoesComponent.vue';

const formulario = FormularioFactory.criarDeGabarito(gabarito);

export default defineComponent({
    name: 'RespostaView',
    data() {
        return {
            formulario,
        };
    },
    components: {
        QuestaoOpcoes,
    },
});
</script>

<template>
    <main>
        <h1>{{ formulario.titulo }}</h1>
        <template v-for="questao in formulario.questoes" :key="questao.rotulo">
            <questao-opcoes :questao="questao" />
        </template>
    </main>
</template>
