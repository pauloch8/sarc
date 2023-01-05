<script lang="ts">
import { QuestaoEditavel } from '@/dominio/editor/QuestaoEditavel';
import { defineComponent } from 'vue';
import QuestaoVisualizacao from './QuestaoVisualizacao.vue';
import QuestaoEdicao from './QuestaoEdicao.vue';

export default defineComponent({
    name: 'ItemDeQuestao',
    components: {
        QuestaoVisualizacao,
        QuestaoEdicao,
    },
    props: {
        questao: { type: QuestaoEditavel, required: false },
    },
    data() {
        return {
            emEdicao: false,
            adicionarQuestao: false,
        };
    },
    methods: {
        editarQuestao(questao: QuestaoEditavel) {
            this.$emit('editar', questao);
        },
        excluirQuestao(questao: QuestaoEditavel) {
            this.$emit('excluiu', questao);
        },
        descerQuestao(questao: QuestaoEditavel) {
            this.$emit('desceu', questao);
        },
        subirQuestao(questao: QuestaoEditavel) {
            this.$emit('subiu', questao);
        },
    },
    emits: ['editar', 'excluiu', 'desceu', 'subiu'],
});
</script>

<template>
    <QuestaoVisualizacao
        v-if="questao && !questao.getEmEdicao()"
        :questao="questao"
        @editou="editarQuestao"
        @excluiu="excluirQuestao"
        @desceu="descerQuestao"
        @subiu="subirQuestao"
    ></QuestaoVisualizacao>

    <QuestaoEdicao
        v-if="questao?.getEmEdicao()"
        :questao="(questao as QuestaoEditavel)"
        @cancelou="emEdicao = false"
        @salvou="emEdicao = false"
    ></QuestaoEdicao>
</template>

<style>
footer {
    text-align: right;
}
</style>
