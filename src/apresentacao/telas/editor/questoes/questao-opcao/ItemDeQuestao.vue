<script lang="ts">
import { QuestaoEditavel } from '@/dominio/editor/questoes/questao-opcao/QuestaoEditavel';
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
        questao: { type: QuestaoEditavel, required: true },
        ehPrimeiro: { type: Boolean, required: true },
        ehUltimo: { type: Boolean, required: true },
    },
    data() {
        return { selecionado: false };
    },
    methods: {
        editar(questao: QuestaoEditavel) {
            this.$emit('editar', questao);
        },
        excluir(questao: QuestaoEditavel) {
            this.$emit('excluir', questao);
        },
        descer(questao: QuestaoEditavel) {
            this.$emit('descer', questao);
        },
        subir(questao: QuestaoEditavel) {
            this.$emit('subir', questao);
        },
        selecionar(questao: QuestaoEditavel) {
            this.$emit('selecionar', questao);
        },
    },
    emits: ['editar', 'excluir', 'descer', 'subir', 'selecionar'],
});
</script>

<template>
    <div>
        <QuestaoVisualizacao
            v-if="!questao.getEmEdicao()"
            :questao="questao"
            :ehPrimeiro="ehPrimeiro"
            :ehUltimo="ehUltimo"
            @editar="editar"
            @excluir="excluir"
            @descer="descer"
            @subir="subir"
            @selecionar="selecionar"
        ></QuestaoVisualizacao>

        <QuestaoEdicao
            v-if="questao.getEmEdicao()"
            :questao="(questao as QuestaoEditavel)"
        ></QuestaoEdicao>
    </div>
</template>
