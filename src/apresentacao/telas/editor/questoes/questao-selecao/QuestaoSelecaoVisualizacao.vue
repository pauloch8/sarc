<script lang="ts">
import { ListaEditavel } from '@/dominio/editor/comum/ListaEditavel';
import { SelecaoEditavel } from '@/dominio/editor/questoes/questao-selecao/selecao/SelecaoEditavel';
import { QuestaoSelecaoEditavel } from '@/dominio/editor/questoes/questao-selecao/QuestaoSelecaoEditavel';
import { defineComponent } from 'vue';
import BotoesEdicao from '../../comum/BotoesEdicao.vue';

export default defineComponent({
    name: 'QuestaoSelecaoVisualizacao',
    components: {
        BotoesEdicao,
    },
    props: {
        questao: { type: QuestaoSelecaoEditavel, required: true },
        ehPrimeiro: { type: Boolean, required: true },
        ehUltimo: { type: Boolean, required: true },
    },
    methods: {
        selecionar() {
            this.$emit('selecionar', this.questao);
        },
        editar() {
            this.$emit('editar', this.questao);
        },
        excluir() {
            this.$emit('excluir', this.questao);
        },
        descer() {
            this.$emit('descer', this.questao);
        },
        subir() {
            this.$emit('subir', this.questao);
        },
    },
    emits: ['selecionar', 'excluir', 'descer', 'subir', 'editar'],
});
</script>

<template>
    <article @click="selecionar">
        <header>
            {{ questao.getIndice() }} - {{ questao.getTitulo() }}
            <BotoesEdicao
                :ehPrimeiro="ehPrimeiro"
                :ehUltimo="ehUltimo"
                @editar="editar"
                @excluir="excluir"
                @descer="descer"
                @subir="subir"
            ></BotoesEdicao>
        </header>
        <fieldset>
            <label
                v-for="selecao in (questao.getListaOpcoes() as ListaEditavel<SelecaoEditavel>).getItens()"
                :key="selecao.getId().toString()"
            >
                <input type="checkbox" disabled />
                {{ selecao.getTitulo() }}
            </label>
        </fieldset>
    </article>
</template>

<style scoped>
article:not(:hover) {
    box-shadow: none;
}

input[type='checkbox'][disabled] {
    cursor: not-allowed;
    border-color: #000;
    background-color: #fff;
}
</style>
