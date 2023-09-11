<script lang="ts">
import { Titulo, ErroDeCriacaoDeTitulo } from '@/dominio/comum/Titulo';
import { ITituloFactory } from '@/dominio/comum/TituloFactory';
import { defineComponent, inject } from 'vue';

export default defineComponent({
    name: 'TituloInput',
    setup() {
        const tituloFactory = inject<ITituloFactory>('tituloFactory');
        if (!tituloFactory) {
            throw new Error('Não injetada a dependência tituloFactory');
        }
        return {
            tituloFactory,
        };
    },
    props: {
        titulo: {
            type: Titulo,
            required: false,
        },
        rotulo: {
            type: String,
            required: false,
        },
    },
    data() {
        return {
            esteRotulo: this.rotulo || 'Título',
            tituloString: this.titulo?.toString() || '',
            erroString: '',
        };
    },
    methods: {
        digitou(evento: FocusEvent) {
            const input = evento.target as HTMLInputElement;
            const texto = input.value;
            let titulo;
            this.erroString = '';
            try {
                titulo = this.tituloFactory.criar(texto);
            } catch (e) {
                if (e instanceof ErroDeCriacaoDeTitulo) {
                    this.erroString = e.message;
                } else {
                    this.erroString =
                        'Ocorreu um erro desconhecido ao criar o título';
                }
                titulo = null;
            }
            this.$emit('digitou', titulo);
        },
    },
    emits: ['digitou'],
});
</script>

<template>
    <label for="titulo">
        {{ esteRotulo }}
        <input
            type="text"
            id="tituloFormulario"
            name="tituloFormulario"
            v-model="tituloString"
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
