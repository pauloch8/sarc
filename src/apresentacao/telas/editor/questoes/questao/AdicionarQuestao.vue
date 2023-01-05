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
        salvou() {
            this.emEdicao = false;
        },
        editar() {
            this.emEdicao = true;
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
        <QuestaoEdicao :indice="indice" @salvou="salvou"> </QuestaoEdicao>
    </div>
</template>

<style>
footer {
    text-align: right;
}
</style>
