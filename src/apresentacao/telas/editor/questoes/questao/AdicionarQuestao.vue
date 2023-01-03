<script lang="ts">
import { QuestaoEditavel } from '@/dominio/editor/QuestaoEditavel';
import { defineComponent } from 'vue';
import QuestaoEdicao from './QuestaoEdicao.vue';

export default defineComponent({
    name: 'AdicionarQuestao',
    components: {
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
        editar() {
            this.emEdicao = true;
        },
    },
});
</script>

<template>
    <div v-if="!adicionarQuestao">
        <a
            href="#"
            role="button"
            class="outline adicionar"
            @click.prevent="adicionarQuestao = true"
            >+ Adicionar Questão</a
        >{{ adicionarQuestao }}
    </div>
    <div v-if="adicionarQuestao">
        <QuestaoEdicao @cancelou="adicionarQuestao = false"> </QuestaoEdicao>
    </div>
</template>

<style>
footer {
    text-align: right;
}
</style>
