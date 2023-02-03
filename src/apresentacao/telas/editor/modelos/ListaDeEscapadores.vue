<script lang="ts">
import { IEscapadorDeQuestao } from '@/dominio/comum/escapador/questao/EscapadorDeQuestao';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ListaDeEscapadores',
    props: {
        escapadoresQuestoes: {
            type: Array,
            required: true,
        },
    },
});
</script>

<template>
    <article class="escapadoresDisponiveis">
        Escapadores de questões disponíveis:
        <ul>
            <li
                v-for="(escapador, indice) in escapadoresQuestoes as IEscapadorDeQuestao[]"
                :key="indice"
            >
                {{ escapador.toString() }}
            </li>
        </ul>
    </article>
</template>

<style lang="scss" scoped>
article * {
    color: #d8ebff;
    background-color: #004589;
}
ul {
    margin: 0;
}
</style>
