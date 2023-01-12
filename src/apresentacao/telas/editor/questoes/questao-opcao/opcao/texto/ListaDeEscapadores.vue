<script lang="ts">
import { IEscapadorDeVariavel } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavel';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ListaDeEscapadores',
    props: {
        escapadoresVariaveis: {
            type: Array,
            required: true,
        },
    },
});
</script>

<template>
    <article>
        Escapadores de variáveis disponíveis:
        <ul>
            <li
                v-for="(escapador, indice) in escapadoresVariaveis as IEscapadorDeVariavel[]"
                :key="indice"
            >
                {{ escapador.toString() }}
            </li>
        </ul>
    </article>
</template>

<style scoped>
ul {
    margin: 0;
}
</style>
