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
        editarOpcao(opcao: OpcaoEditavel) {
            this.$emit('editar', opcao);
        },
        excluirOpcao(opcao: OpcaoEditavel) {
            this.$emit('excluiu', opcao);
        },
        descerOpcao(opcao: OpcaoEditavel) {
            this.$emit('desceu', opcao);
        },
        subirOpcao(opcao: OpcaoEditavel) {
            this.$emit('subiu', opcao);
        },
    },
    emits: ['editar', 'excluiu', 'desceu', 'subiu'],
});
</script>

<template>
    <div>
        <OpcaoVisualizacao
            v-if="!opcao.getEmEdicao()"
            :opcao="opcao"
            :ehPrimeiro="ehPrimeiro"
            :ehUltimo="ehUltimo"
            @editou="editarOpcao"
            @excluiu="excluirOpcao"
            @desceu="descerOpcao"
            @subiu="subirOpcao"
        ></OpcaoVisualizacao>

        <OpcaoEdicao v-if="opcao.getEmEdicao()" :opcao="opcao"></OpcaoEdicao>
    </div>
</template>

<style>
footer {
    text-align: right;
}
</style>
