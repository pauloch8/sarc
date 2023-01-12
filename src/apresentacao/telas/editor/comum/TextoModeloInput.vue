<script lang="ts">
import {
    TextoModelo,
    ErroDeCriacaoDeTextoModelo,
} from '@/dominio/editor/comum/TextoModelo';
import { ITextoModeloFactory } from '@/dominio/editor/comum/TextoModeloFactory';
import { defineComponent, inject } from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default defineComponent({
    name: 'TextoModeloInput',
    setup() {
        const textoModeloFactory =
            inject<ITextoModeloFactory>('textoModeloFactory');
        if (!textoModeloFactory) {
            throw new Error('Não injetada a dependência textoModeloFactory');
        }
        return {
            textoModeloFactory,
        };
    },
    props: {
        textoModelo: {
            type: TextoModelo,
            required: false,
        },
    },
    data() {
        return {
            textoModeloString: this.textoModelo?.getTextoHtml() || '',
            ClassicEditor,
            erroString: '',
        };
    },
    methods: {
        digitou() {
            const texto = this.textoModeloString;
            let textoModelo;
            this.erroString = '';
            try {
                textoModelo = this.textoModeloFactory.criar(texto);
            } catch (e) {
                if (e instanceof ErroDeCriacaoDeTextoModelo) {
                    this.erroString = e.message;
                } else {
                    this.erroString =
                        'Ocorreu um erro desconhecido ao criar o Texto';
                }
                textoModelo = null;
            }
            this.$emit('digitou', textoModelo);
        },
    },
    emits: ['digitou'],
});
</script>

<template>
    <label for="textoModelo">
        Texto Modelo
        <ckeditor
            :editor="ClassicEditor"
            :config="{}"
            v-model="textoModeloString"
            @blur="digitou"
        ></ckeditor>
        <article class="erro" v-if="erroString">{{ erroString }}</article>
    </label>
</template>

<style scoped>
input {
    background-color: white;
}
</style>
