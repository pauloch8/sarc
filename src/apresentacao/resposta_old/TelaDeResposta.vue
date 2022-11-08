<template>
    <main>
        <h1>{{ gabarito.titulo }}</h1>
        <template v-for="questao in gabarito.questoes" :key="questao.rotulo">
            <questao-opcoes :questao="questao" />
        </template>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { gabarito } from './gabarito';
import QuestaoOpcoes from './QuestaoOpcoes.vue';

export default defineComponent({
    name: 'TelaDeResposta',
    data(): any {
        return {
            gabarito,
        };
    },
    components: {
        QuestaoOpcoes,
    },
});
</script>
