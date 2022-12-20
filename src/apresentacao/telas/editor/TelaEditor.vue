<script lang="ts">
import { defineComponent } from 'vue';
import { Editor } from '@/dominio/editor/Editor';
import TituloInput from './TituloInput.vue';
import { Titulo } from '@/dominio/editor/Titulo';

export default defineComponent({
    name: 'TelaEditor',
    inject: ['editor'],
    components: {
        TituloInput,
    },
    data() {
        return {
            esteEditor: this.editor as unknown as Editor,
        };
    },
    methods: {
        digitouTitulo(titulo?: Titulo) {
            if (titulo) this.esteEditor.setTitulo(titulo);
        },
    },
});
</script>

<template>
    <article>
        <header>Dados do formulário</header>
        <TituloInput
            :titulo="esteEditor.getTitulo()"
            @digitouTitulo="digitouTitulo"
        ></TituloInput>
        {{ editor }}
    </article>
</template>
