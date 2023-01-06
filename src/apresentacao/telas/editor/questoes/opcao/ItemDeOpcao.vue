<script lang="ts">
import { OpcaoEditavel } from '@/dominio/editor/OpcaoEditavel';
import { defineComponent } from 'vue';
import OpcaoVisualizacao from './OpcaoVisualizacao.vue';
import OpcaoEdicao from './OpcaoEdicao.vue';

export default defineComponent({
    name: 'ItemDeOpcao',
    components: {
        OpcaoVisualizacao,
        OpcaoEdicao,
    },
    props: {
        opcao: { type: OpcaoEditavel, required: true },
        ehPrimeiro: { type: Boolean, required: true },
        ehUltimo: { type: Boolean, required: true },
    },
    methods: {
        editar(opcao: OpcaoEditavel) {
            this.$emit('editar', opcao);
        },
        excluir(opcao: OpcaoEditavel) {
            this.$emit('excluir', opcao);
        },
        descer(opcao: OpcaoEditavel) {
            this.$emit('descer', opcao);
        },
        subir(opcao: OpcaoEditavel) {
            this.$emit('subir', opcao);
        },
    },
    emits: ['editar', 'excluir', 'descer', 'subir'],
});
</script>

<template>
    <div>
        <OpcaoVisualizacao
            v-if="!opcao.getEmEdicao()"
            :opcao="opcao"
            :ehPrimeiro="ehPrimeiro"
            :ehUltimo="ehUltimo"
            @editar="editar"
            @excluir="excluir"
            @descer="descer"
            @subir="subir"
        ></OpcaoVisualizacao>

        <OpcaoEdicao v-if="opcao.getEmEdicao()" :opcao="opcao"></OpcaoEdicao>
    </div>
</template>

<style>
footer {
    text-align: right;
}
</style>
