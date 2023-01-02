<script lang="ts">
import { defineComponent } from 'vue';
import OpcaoVisualizacao from './OpcaoVisualizacao.vue';
import OpcaoEdicao from './OpcaoEdicao.vue';
import { Opcao } from '@/dominio/editor/Opcao';

export default defineComponent({
    name: 'OpcaoComponent',
    components: {
        OpcaoVisualizacao,
        OpcaoEdicao,
    },
    props: {
        opcao: {
            type: Opcao,
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
    <OpcaoVisualizacao
        v-if="!emEdicao"
        :opcao="opcao"
        @editou="emEdicao = true"
    ></OpcaoVisualizacao>
    <OpcaoEdicao
        v-if="emEdicao"
        :opcao="opcao"
        @cancelou="emEdicao = false"
        @salvou="emEdicao = false"
    ></OpcaoEdicao>
</template>
