<script lang="ts">
import { Opcao } from '@/dominio/formulario/questoes/opcoes/Opcao';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'OpcaoComponent',
    props: {
        opcao: {
            type: Opcao,
            required: true,
        },
        questaoId: {
            type: String,
            required: true,
        },
        modelValue: {
            type: Opcao,
            required: false,
        },
    },
    emits: ['opcaoSelecionada'],
});
</script>

<template>
    <label :for="opcao.getId()">
        <input
            :checked="modelValue?.getId() === opcao.getId()"
            type="radio"
            :name="questaoId"
            :id="opcao.getId()"
            @click="$emit('opcaoSelecionada', opcao)"
        />
        {{ opcao.getLabel() }}
    </label>
</template>
