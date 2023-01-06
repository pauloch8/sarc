<script lang="ts">
import { QuestaoEditavel } from '@/dominio/editor/QuestaoEditavel';
import { defineComponent } from 'vue';
import QuestaoVisualizacao from './QuestaoVisualizacao.vue';
import QuestaoEdicao from './QuestaoEdicao.vue';
import AdicionarQuestao from './AdicionarQuestao.vue';

export default defineComponent({
    name: 'ItemDeQuestao',
    components: {
        QuestaoVisualizacao,
        QuestaoEdicao,
        AdicionarQuestao,
    },
    props: {
        questao: { type: QuestaoEditavel, required: true },
        ehPrimeiro: { type: Boolean, required: true },
        ehUltimo: { type: Boolean, required: true },
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
    <div>
        <QuestaoVisualizacao
            v-if="!questao.getEmEdicao()"
            :questao="questao"
            :ehPrimeiro="ehPrimeiro"
            :ehUltimo="ehUltimo"
            @editou="editarQuestao"
            @excluiu="excluirQuestao"
            @desceu="descerQuestao"
            @subiu="subirQuestao"
        ></QuestaoVisualizacao>

        <QuestaoEdicao
            v-if="questao.getEmEdicao()"
            :questao="(questao as QuestaoEditavel)"
        ></QuestaoEdicao>

        <AdicionarQuestao
            v-if="ehUltimo"
            :indice="questao.getIndice() + 1"
        ></AdicionarQuestao>
    </div>
</template>

<style>
footer {
    text-align: right;
}
</style>
