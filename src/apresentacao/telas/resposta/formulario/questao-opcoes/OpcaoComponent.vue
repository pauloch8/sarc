<script lang="ts">
import { IOpcao, Opcao } from '@/dominio/formulario/questoes/opcoes/Opcao';
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
    methods: {
        emitirOpcaoSelecionada() {
            console.log('emitiu opção selecioanda', this.opcao);
            this.$emit('opcaoSelecionada', this.opcao);
        },
    },
});
</script>

<template>
    <label :for="opcao.getId()">
        <input
            :checked="modelValue?.getId() === opcao.getId()"
            type="radio"
            :name="questaoId"
            :id="questaoId + opcao.getId()"
            @click="emitirOpcaoSelecionada()"
        />
        {{ opcao.getLabel() }}
    </label>
</template>
