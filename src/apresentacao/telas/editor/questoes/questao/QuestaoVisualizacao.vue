<script lang="ts">
import { ListaEditavel } from '@/dominio/editor/ListaEditavel';
import { OpcaoEditavel } from '@/dominio/editor/OpcaoEditavel';
import { QuestaoEditavel } from '@/dominio/editor/QuestaoEditavel';
import { defineComponent } from 'vue';
import BotoesEdicao from '../comum/BotoesEdicao.vue';

export default defineComponent({
    name: 'QuestaoVisualizacao',
    components: {
        BotoesEdicao,
    },
    props: {
        questao: { type: QuestaoEditavel, required: true },
        ehPrimeiro: { type: Boolean, required: true },
        ehUltimo: { type: Boolean, required: true },
    },
    methods: {
        selecionar() {
            this.$emit('selecionar', this.questao);
        },
        editarQuestao() {
            this.$emit('editar', this.questao);
        },
        excluirQuestao() {
            this.$emit('excluir', this.questao);
        },
        descerQuestao() {
            this.$emit('descer', this.questao);
        },
        subirQuestao() {
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
                @editou="editarQuestao"
                @excluiu="excluirQuestao"
                @desceu="descerQuestao"
                @subiu="subirQuestao"
            ></BotoesEdicao>
        </header>
        <fieldset>
            <label
                v-for="opcao in (questao.getOpcoes() as ListaEditavel<OpcaoEditavel>).getItens()"
                :key="opcao.getId().toString()"
            >
                <input type="radio" disabled />
                {{ opcao.getTitulo() }}
            </label>
        </fieldset>
    </article>
</template>

<style scoped>
article:not(:hover) {
    box-shadow: none;
}

input[type='radio'][disabled] {
    cursor: not-allowed;
    border-color: #000;
    background-color: #fff;
}
</style>
