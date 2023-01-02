<script lang="ts">
import { QuestaoEditavel } from '@/dominio/editor/QuestaoEditavel';
import { defineComponent } from 'vue';
import QuestaoEdicao from './QuestaoEdicao.vue';
import QuestaoVisualizacao from './QuestaoVisualizacao.vue';

export default defineComponent({
    name: 'QuestaoComponent',
    components: {
        QuestaoEdicao,
        QuestaoVisualizacao,
    },
    props: {
        questao: { type: QuestaoEditavel, required: false },
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
    <QuestaoVisualizacao
        v-if="!emEdicao && questao"
        :questao="questao"
        @editou="emEdicao = true"
    ></QuestaoVisualizacao>
    <QuestaoEdicao
        v-if="emEdicao"
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
