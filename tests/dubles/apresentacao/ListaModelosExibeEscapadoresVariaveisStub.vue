<script lang="ts">
import { defineComponent, inject } from 'vue';
import { IEscapadorDeQuestao } from '@/dominio/comum/escapador/questao/EscapadorDeQuestao';

export default defineComponent({
    name: 'ListaModelos',
    setup() {
        const escapadores = inject<IEscapadorDeQuestao[]>(
            'escapadoresQuestoes',
        );
        return {
            escapadores,
        };
    },
});
</script>

<template>
    Escapadores de Questão
    <div
        v-for="(escapador, indice) in escapadores as IEscapadorDeQuestao[]"
        :key="indice"
    >
        {{ escapador.toString() }}
    </div>
</template>
