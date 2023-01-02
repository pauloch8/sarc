<script lang="ts">
import { Opcao } from '@/dominio/editor/Opcao';
import { defineComponent } from 'vue';
import BotoesEdicao from '../comum/BotoesEdicao.vue';

export default defineComponent({
    name: 'OpcaoVisualizacao',
    components: { BotoesEdicao },
    props: {
        opcao: {
            type: Opcao,
            required: true,
        },
    },
    emits: ['excluiu', 'desceu', 'subiu', 'editou'],
});
</script>

<template>
    <label>
        <input type="radio" disabled />
        {{ opcao.getTitulo() }}
        <BotoesEdicao
            @editou="$emit('editou')"
            @excluiu="$emit('excluiu')"
            @desceu="$emit('desceu')"
            @subiu="$emit('subiu')"
        ></BotoesEdicao>
    </label>
</template>

<style lang="scss" scoped>
label {
    padding: 20px 40px;
}

label:hover {
    border-radius: var(--border-radius);
    background: var(--card-background-color);
    box-shadow: var(--card-box-shadow);
}

input[type='radio'][disabled] {
    cursor: not-allowed;
    border-color: #000;
    background-color: #fff;
}
</style>
