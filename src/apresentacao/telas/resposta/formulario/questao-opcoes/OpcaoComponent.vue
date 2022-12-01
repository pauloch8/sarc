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
    computed: {
        idRadio() {
            return this.questaoId + '-' + this.opcao.getId();
        },
        isChecked() {
            return this.modelValue?.getId() === this.opcao.getId();
        },
    },
    methods: {
        emitirOpcaoSelecionada() {
            this.$emit('opcaoSelecionada', this.opcao);
        },
    },
    emits: ['opcaoSelecionada'],
});
</script>

<template>
    <label :for="idRadio">
        <input
            :checked="isChecked"
            type="radio"
            :name="questaoId"
            :id="idRadio"
            @click="emitirOpcaoSelecionada()"
        />
        {{ opcao.getLabel() }}
    </label>
</template>
