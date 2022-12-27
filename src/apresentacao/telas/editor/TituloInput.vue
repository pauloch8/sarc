<script lang="ts">
import { Titulo } from '@/dominio/editor/Titulo';
import {
    ErroDeCriacaoDeTitulo,
    ITituloFactory,
} from '@/dominio/editor/TituloFactory';
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
    },
    data() {
        return {
            tituloString: this.titulo?.toString() || '',
            erro: '',
        };
    },
    methods: {
        criarTitulo(texto: string) {
            this.erro = '';
            try {
                return this.tituloFactory.criar(texto);
            } catch (e) {
                if (e instanceof ErroDeCriacaoDeTitulo) {
                    this.erro = e.message;
                } else {
                    this.erro =
                        'Ocorreu um erro desconhecido ao criar o título';
                }
                return null;
            }
        },
        digitou(evento: FocusEvent) {
            const input = evento.target as HTMLInputElement;
            const titulo = this.criarTitulo(input.value);
            this.$emit('digitou', titulo);
        },
    },
    emits: ['digitou'],
});
</script>

<template>
    <label for="titulo">
        Título
        <input
            type="text"
            id="tituloFormulario"
            name="tituloFormulario"
            v-model="tituloString"
            @focusout="digitou"
            required
        />
        <article class="erro" v-if="erro">{{ erro }}</article>
    </label>
</template>

<style scoped>
.erro {
    background-color: brown;
    color: white;
}
</style>
