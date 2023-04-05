<script lang="ts">
import { SelecaoEditavel } from '@/dominio/editor/questoes/questao-selecao/selecao/SelecaoEditavel';
import { defineComponent } from 'vue';
import BotoesEdicao from '../../../comum/BotoesEdicao.vue';

export default defineComponent({
    name: 'SelecaoVisualizacao',
    components: { BotoesEdicao },
    props: {
        selecao: { type: SelecaoEditavel, required: true },
        ehPrimeiro: { type: Boolean, required: true },
        ehUltimo: { type: Boolean, required: true },
    },
    methods: {
        editar() {
            this.$emit('editar', this.selecao);
        },
        excluir() {
            this.$emit('excluir', this.selecao);
        },
        descer() {
            this.$emit('descer', this.selecao);
        },
        subir() {
            this.$emit('subir', this.selecao);
        },
    },
    emits: ['excluir', 'descer', 'subir', 'editar'],
});
</script>

<template>
    <label>
        <input type="checkbox" disabled />
        {{ selecao.getTitulo() }}
        <BotoesEdicao
            :ehPrimeiro="ehPrimeiro"
            :ehUltimo="ehUltimo"
            @editar="editar"
            @excluir="excluir"
            @descer="descer"
            @subir="subir"
        ></BotoesEdicao>
    </label>
</template>

<style lang="scss" scoped>
label {
    padding: 20px 40px;
}

label:hover {
    border-radius: var(--border-radius);
    background: var(--card-background-color);
    box-shadow: var(--card-box-shadow);
}

input[type='checkbox'][disabled] {
    cursor: not-allowed;
    border-color: #000;
    background-color: #fff;
}
</style>
