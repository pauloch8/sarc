<script lang="ts">
import { Variavel } from '@/dominio/formulario/questoes/Variavel';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'VariavelComponent',
    props: {
        variavel: {
            type: Variavel,
            required: true,
        },
        valor: {
            type: String,
            required: true,
        },
    },
    emits: ['update:valor'],
    setup(props, { emit }) {
        const updateValor = (e: Event) => {
            emit('update:valor', (e.target as HTMLInputElement).value);
        };
        return { updateValor };
    },
});
</script>

<template>
    <label :for="variavel.getId()">
        {{ variavel.getLabel() }}
        <input
            type="text"
            :id="variavel.getId()"
            :name="variavel.getId()"
            :value="valor"
            @input="updateValor"
            autocomplete="off"
        />
    </label>
</template>
