<script lang="ts">
import { defineComponent } from 'vue';
import { Editor } from '@/dominio/editor/Editor';
import TituloInput from './TituloInput.vue';
import { Titulo } from '@/dominio/editor/Titulo';
import IdFormularioInput from './IdFormularioInput.vue';
import { IdFormulario } from '@/dominio/editor/IdFormulario';
import SubtituloInput from './SubtituloInput.vue';
import { Subtitulo } from '@/dominio/editor/Subtitulo';

export default defineComponent({
    name: 'TelaEditor',
    components: {
        TituloInput,
        IdFormularioInput,
        SubtituloInput,
    },
    props: {
        editor: {
            type: Editor,
            required: false,
        },
    },
    data() {
        return {
            esteEditor: this.editor,
            idFormulario: this.editor?.getId(),
            titulo: this.editor?.getTitulo(),
            subtitulo: this.editor?.getSubtitulo(),
        };
    },
    methods: {
        gerouId(id?: IdFormulario) {
            this.idFormulario = id;
        },
        digitouTitulo(titulo?: Titulo) {
            this.titulo = titulo;
        },
        digitouSubtitulo(subtitulo?: Subtitulo) {
            this.subtitulo = subtitulo;
        },
    },
});
</script>

<template>
    <article>
        <header>Dados do formulário</header>

        <IdFormularioInput
            :titulo="(titulo as Titulo)"
            @gerouId="gerouId"
        ></IdFormularioInput>

        <TituloInput
            :titulo="(titulo as Titulo)"
            @digitou="digitouTitulo"
        ></TituloInput>

        <SubtituloInput
            :subtitulo="(subtitulo as Subtitulo)"
            @digitou="digitouSubtitulo"
        ></SubtituloInput>
    </article>
</template>
