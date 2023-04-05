<script lang="ts">
import { SelecaoEditavel } from '@/dominio/editor/questoes/questao-selecao/selecao/SelecaoEditavel';
import { defineComponent } from 'vue';
import SelecaoVisualizacao from './SelecaoVisualizacao.vue';
import SelecaoEdicao from './SelecaoEdicao.vue';

export default defineComponent({
    name: 'ItemDeSelecao',
    components: {
        SelecaoVisualizacao,
        SelecaoEdicao,
    },
    props: {
        selecao: { type: SelecaoEditavel, required: true },
        ehPrimeiro: { type: Boolean, required: true },
        ehUltimo: { type: Boolean, required: true },
    },
    methods: {
        editar(selecao: SelecaoEditavel) {
            this.$emit('editar', selecao);
        },
        excluir(selecao: SelecaoEditavel) {
            this.$emit('excluir', selecao);
        },
        descer(selecao: SelecaoEditavel) {
            this.$emit('descer', selecao);
        },
        subir(selecao: SelecaoEditavel) {
            this.$emit('subir', selecao);
        },
    },
    emits: ['editar', 'excluir', 'descer', 'subir'],
});
</script>

<template>
    <div>
        <SelecaoVisualizacao
            v-if="!selecao.getEmEdicao()"
            :selecao="selecao"
            :ehPrimeiro="ehPrimeiro"
            :ehUltimo="ehUltimo"
            @editar="editar"
            @excluir="excluir"
            @descer="descer"
            @subir="subir"
        ></SelecaoVisualizacao>
        <SelecaoEdicao
            v-if="selecao.getEmEdicao()"
            :selecao="selecao"
        ></SelecaoEdicao>
    </div>
</template>
