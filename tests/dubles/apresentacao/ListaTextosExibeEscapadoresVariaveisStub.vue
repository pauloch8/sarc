<script lang="ts">
import { defineComponent, inject } from 'vue';
import { IEscapadorDeVariavel } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavel';

export default defineComponent({
    name: 'ListaTextos',
    setup() {
        const escapadores = inject<IEscapadorDeVariavel[]>(
            'escapadoresVariaveis',
        );
        return {
            escapadores,
        };
    },
});
</script>

<template>
    Escapadores
    <div
        v-for="(escapador, indice) in escapadores as IEscapadorDeVariavel[]"
        :key="indice"
    >
        {{ escapador.toString() }}
    </div>
</template>
