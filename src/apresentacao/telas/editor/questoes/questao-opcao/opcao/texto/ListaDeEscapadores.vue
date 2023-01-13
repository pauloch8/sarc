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
    <article class="escapadoresDisponiveis">
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

<style lang="scss" scoped>
article * {
    color: #d8ebff;
    background-color: #004589;
}
ul {
    margin: 0;
}
</style>
