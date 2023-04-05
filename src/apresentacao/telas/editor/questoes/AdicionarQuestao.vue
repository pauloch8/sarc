<script lang="ts">
import { QuestaoOpcaoEditavel } from '@/dominio/editor/questoes/questao-opcao/QuestaoOpcaoEditavel';
import { defineComponent } from 'vue';
import QuestaoOpcaoEdicao from './questao-opcao/QuestaoOpcaoEdicao.vue';

export default defineComponent({
    name: 'AdicionarQuestao',
    components: {
        QuestaoOpcaoEdicao,
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
        adicionarItem(item: QuestaoOpcaoEditavel) {
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
            + Adicionar Questão
        </a>
    </div>
    <div v-if="emEdicao">
        <QuestaoOpcaoEdicao
            :indice="indice"
            @criou="adicionarItem"
            @cancelou="cancelou"
        >
        </QuestaoOpcaoEdicao>
    </div>
</template>
