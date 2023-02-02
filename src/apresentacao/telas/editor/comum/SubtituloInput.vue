<script lang="ts">
import { Subtitulo, ErroDeCriacaoDeSubtitulo } from '@/dominio/comum/Subtitulo';
import { ISubtituloFactory } from '@/dominio/comum/SubtituloFactory';
import { defineComponent, inject } from 'vue';

export default defineComponent({
    name: 'SubtituloInput',
    setup() {
        const factory = inject<ISubtituloFactory>('subtituloFactory');
        if (!factory) {
            throw new Error('Não injetada a dependência subtituloFactory');
        }
        return {
            factory,
        };
    },
    props: {
        subtitulo: {
            type: Subtitulo,
            required: false,
        },
    },
    data() {
        return {
            subTituloString: this.subtitulo?.toString() || '',
            erro: '',
        };
    },
    methods: {
        criarSubtitulo(texto: string) {
            this.erro = '';
            if (texto) {
                try {
                    return this.factory.criar(texto);
                } catch (e) {
                    if (e instanceof ErroDeCriacaoDeSubtitulo) {
                        this.erro = e.message;
                    } else {
                        this.erro =
                            'Ocorreu um erro desconhecido ao criar o título';
                    }
                    return null;
                }
            }
            return null;
        },
        digitou(evento: FocusEvent) {
            const input = evento.target as HTMLInputElement;
            const subtitulo = this.criarSubtitulo(input.value);
            this.$emit('digitou', subtitulo);
        },
    },
    emits: ['digitou'],
});
</script>

<template>
    <div>
        <label for="subtitulo">
            Subtítulo do formulário
            <textarea
                id="subtituloFormulario"
                name="subtituloFormulario"
                v-model="subTituloString"
                @focusout="digitou"
                required
            ></textarea>
            <article class="erro" v-if="erro">{{ erro }}</article>
        </label>
    </div>
</template>

<style scoped>
textarea {
    background-color: white;
    resize: vertical;
}
</style>
