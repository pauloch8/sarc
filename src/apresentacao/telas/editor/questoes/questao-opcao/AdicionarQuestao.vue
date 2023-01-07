<script lang="ts">
import { defineComponent } from 'vue';
import QuestaoEdicao from './QuestaoEdicao.vue';

export default defineComponent({
    name: 'AdicionarQuestao',
    components: {
        QuestaoEdicao,
    },
    props: {
        indice: {
            type: Number,
            required: true,
        },
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
        salvou() {
            this.emEdicao = false;
        },
        cancelou() {
            this.emEdicao = false;
        },
    },
    emits: ['salvou'],
});
</script>

<template>
    <div v-if="!emEdicao">
        <a
            href="#"
            role="button"
            class="outline adicionar"
            @click.prevent="editar"
        >
            + Adicionar Questão
        </a>
    </div>
    <div v-if="emEdicao">
        <QuestaoEdicao :indice="indice" @salvou="salvou" @cancelou="cancelou">
        </QuestaoEdicao>
    </div>
</template>

<style>
footer {
    text-align: right;
}
</style>
