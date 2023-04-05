<script lang="ts">
import { QuestaoOpcaoEditavel } from '@/dominio/editor/questoes/questao-opcao/QuestaoOpcaoEditavel';
import { defineComponent } from 'vue';
import QuestaoVisualizacao from './QuestaoOpcaoVisualizacao.vue';
import QuestaoEdicao from './QuestaoOpcaoEdicao.vue';

export default defineComponent({
    name: 'ItemDeQuestaoOpcao',
    components: {
        QuestaoVisualizacao,
        QuestaoEdicao,
    },
    props: {
        questao: { type: QuestaoOpcaoEditavel, required: true },
        ehPrimeiro: { type: Boolean, required: true },
        ehUltimo: { type: Boolean, required: true },
    },
    data() {
        return { selecionado: false };
    },
    methods: {
        editar(questao: QuestaoOpcaoEditavel) {
            this.$emit('editar', questao);
        },
        excluir(questao: QuestaoOpcaoEditavel) {
            this.$emit('excluir', questao);
        },
        descer(questao: QuestaoOpcaoEditavel) {
            this.$emit('descer', questao);
        },
        subir(questao: QuestaoOpcaoEditavel) {
            this.$emit('subir', questao);
        },
        selecionar(questao: QuestaoOpcaoEditavel) {
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
            :questao="(questao as QuestaoOpcaoEditavel)"
        ></QuestaoEdicao>
    </div>
</template>
