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
            esteTitulo: this.titulo || '',
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
        digitouTitulo(evento: FocusEvent) {
            const input = evento.target as HTMLInputElement;
            const titulo = this.criarTitulo(input.value);
            this.$emit('digitouTitulo', titulo);
        },
    },
    emits: ['digitouTitulo'],
});
</script>

<template>
    <label for="titulo">
        Título
        <input
            type="text"
            id="tituloFormulario"
            name="tituloFormulario"
            placeholder="Título do formulário"
            v-model="esteTitulo"
            @focusout="digitouTitulo"
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
