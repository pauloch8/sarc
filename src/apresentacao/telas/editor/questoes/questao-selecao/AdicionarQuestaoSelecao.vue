<script lang="ts">
import { QuestaoSelecaoEditavel } from '@/dominio/editor/questoes/questao-selecao/QuestaoSelecaoEditavel';
import { defineComponent } from 'vue';
import QuestaoSelecaoEdicao from './QuestaoSelecaoEdicao.vue';

export default defineComponent({
    name: 'AdicionarQuestaoSelecao',
    components: {
        QuestaoSelecaoEdicao,
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
        adicionarItem(item: QuestaoSelecaoEditavel) {
            this.emEdicao = false;
            this.$emit('adicionarItem', item);
        },
        cancelou() {
            this.emEdicao = false;
        },
    },
    emits: ['adicionarItem'],
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
            + Adicionar Questão Seleção
        </a>
    </div>
    <div v-if="emEdicao">
        <QuestaoSelecaoEdicao
            :indice="indice"
            @criou="adicionarItem"
            @cancelou="cancelou"
        >
        </QuestaoSelecaoEdicao>
    </div>
</template>
