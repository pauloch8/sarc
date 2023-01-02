<script lang="ts">
import { defineComponent } from 'vue';
import VariavelVisualizacao from './VariavelVisualizacao.vue';
import VariavelEdicao from './VariavelEdicao.vue';
import { Variavel } from '@/dominio/formulario/questoes/Variavel';

export default defineComponent({
    name: 'VariavelComponent',
    components: {
        VariavelVisualizacao,
        VariavelEdicao,
    },
    props: {
        variavel: {
            type: Variavel,
            required: true,
        },
    },
    data() {
        return {
            emEdicao: false,
        };
    },
    methods: {
        editar() {
            this.emEdicao = true;
        },
    },
});
</script>

<template>
    <VariavelVisualizacao
        v-if="!emEdicao"
        :variavel="variavel"
        @editou="emEdicao = true"
    ></VariavelVisualizacao>
    <VariavelEdicao
        v-if="emEdicao"
        :variavel="variavel"
        @cancelou="emEdicao = false"
        @salvou="emEdicao = false"
    ></VariavelEdicao>
</template>
