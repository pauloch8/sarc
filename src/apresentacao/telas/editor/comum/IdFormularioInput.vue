<script lang="ts">
import {
    IdFormulario,
    ErroDeCriacaoDeIdFormulario,
} from '@/dominio/comum/IdFormulario';
import { IIdFormularioFactory } from '@/dominio/comum/IdFormularioFactory';
import { defineComponent, inject } from 'vue';

export default defineComponent({
    name: 'IdFormularioInput',
    setup() {
        const factory = inject<IIdFormularioFactory>('idFormularioFactory');
        if (!factory) {
            throw new Error('Não injetada a dependência idFormularioFactory');
        }
        return {
            factory: factory,
        };
    },
    props: {
        idFormulario: {
            type: IdFormulario,
            required: false,
        },
        rotulo: {
            type: String,
            required: false,
        },
    },
    data() {
        return {
            esteRotulo: this.rotulo || 'ID de Formulário',
            idFormularioString: this.idFormulario?.toString() || '',
            erroString: '',
        };
    },
    methods: {
        digitou(evento: FocusEvent) {
            const input = evento.target as HTMLInputElement;
            const texto = input.value;
            let id;
            this.erroString = '';
            try {
                id = this.factory.criarDeString(texto);
            } catch (e) {
                if (e instanceof ErroDeCriacaoDeIdFormulario) {
                    this.erroString = e.message;
                } else {
                    this.erroString = `Ocorreu um erro desconhecido ao criar o ${this.esteRotulo}`;
                }
                id = null;
            }
            this.$emit('digitou', id);
        },
    },
    emits: ['digitou'],
});
</script>

<template>
    <label for="id-Formulario">
        {{ esteRotulo }}
        <input
            type="text"
            id="id-Formulario"
            name="id-Formulario"
            v-model="idFormularioString"
            @focusout="digitou"
            autocomplete="off"
            required
        />
        <article class="erro" v-if="erroString">{{ erroString }}</article>
    </label>
</template>

<style scoped>
input {
    background-color: white;
}
</style>
