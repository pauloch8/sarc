<script lang="ts">
import { ListaEditavel } from '@/dominio/editor/ListaEditavel';
import { Opcao } from '@/dominio/editor/Opcao';
import { QuestaoEditavel } from '@/dominio/editor/QuestaoEditavel';
import { defineComponent } from 'vue';
import BotoesEdicao from '../comum/BotoesEdicao.vue';

export default defineComponent({
    name: 'QuestaoVisualizacao',
    components: {
        BotoesEdicao,
    },
    props: {
        questao: { type: QuestaoEditavel, required: true },
    },
    methods: {
        editarQuestao() {
            this.$emit('editou', this.questao);
        },
        excluirQuestao() {
            this.$emit('excluiu', this.questao);
        },
        descerQuestao() {
            this.$emit('desceu', this.questao);
        },
        subirQuestao() {
            this.$emit('subiu', this.questao);
        },
    },
    emits: ['excluiu', 'desceu', 'subiu', 'editou'],
});
</script>

<template>
    <article>
        <header>
            {{ questao.getIndice() }} - {{ questao.getTitulo() }}
            <BotoesEdicao
                @editou="editarQuestao"
                @excluiu="excluirQuestao"
                @desceu="descerQuestao"
                @subiu="subirQuestao"
            ></BotoesEdicao>
        </header>
        <fieldset>
            <label
                v-for="opcao in (questao.getOpcoes() as ListaEditavel<Opcao>).getItens()"
                :key="opcao.getId().toString()"
            >
                <input type="radio" disabled />
                {{ opcao.getTitulo() }}
            </label>
        </fieldset>
    </article>
</template>

<style scoped>
article:not(:hover) {
    box-shadow: none;
}

input[type='radio'][disabled] {
    cursor: not-allowed;
    border-color: #000;
    background-color: #fff;
}
</style>
