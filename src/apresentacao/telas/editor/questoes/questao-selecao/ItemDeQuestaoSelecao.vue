<script lang="ts">
import { QuestaoSelecaoEditavel } from '@/dominio/editor/questoes/questao-selecao/QuestaoSelecaoEditavel';
import { defineComponent } from 'vue';
import QuestaoSelecaoVisualizacao from './QuestaoSelecaoVisualizacao.vue';
import QuestaoSelecaoEdicao from './QuestaoSelecaoEdicao.vue';

export default defineComponent({
    name: 'ItemDeQuestaoSelecao',
    components: {
        QuestaoSelecaoVisualizacao,
        QuestaoSelecaoEdicao,
    },
    props: {
        questao: { type: QuestaoSelecaoEditavel, required: true },
        ehPrimeiro: { type: Boolean, required: true },
        ehUltimo: { type: Boolean, required: true },
    },
    data() {
        return { selecionado: false };
    },
    methods: {
        editar(questao: QuestaoSelecaoEditavel) {
            this.$emit('editar', questao);
        },
        excluir(questao: QuestaoSelecaoEditavel) {
            this.$emit('excluir', questao);
        },
        descer(questao: QuestaoSelecaoEditavel) {
            this.$emit('descer', questao);
        },
        subir(questao: QuestaoSelecaoEditavel) {
            this.$emit('subir', questao);
        },
        selecionar(questao: QuestaoSelecaoEditavel) {
            this.$emit('selecionar', questao);
        },
    },
    emits: ['editar', 'excluir', 'descer', 'subir', 'selecionar'],
});
</script>

<template>
    <div>
        <QuestaoSelecaoVisualizacao
            v-if="!questao.getEmEdicao()"
            :questao="questao"
            :ehPrimeiro="ehPrimeiro"
            :ehUltimo="ehUltimo"
            @editar="editar"
            @excluir="excluir"
            @descer="descer"
            @subir="subir"
            @selecionar="selecionar"
        ></QuestaoSelecaoVisualizacao>

        <QuestaoSelecaoEdicao
            v-if="questao.getEmEdicao()"
            :questao="(questao as QuestaoSelecaoEditavel)"
        ></QuestaoSelecaoEdicao>
    </div>
</template>
