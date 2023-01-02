<script lang="ts">
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
    emits: ['excluiu', 'desceu', 'subiu', 'editou'],
});
</script>

<template>
    <article>
        <header>
            1 - {{ questao.getTitulo() }}
            <BotoesEdicao
                @editou="$emit('editou')"
                @excluiu="$emit('excluiu')"
                @desceu="$emit('desceu')"
                @subiu="$emit('subiu')"
            ></BotoesEdicao>
        </header>
        <fieldset>
            <label
                v-for="opcao in questao.getOpcoes().getItens()"
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
