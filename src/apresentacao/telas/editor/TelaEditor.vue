<script lang="ts">
import { Editor } from '@/dominio/editor/Editor';
import { defineComponent } from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default defineComponent({
    name: 'TelaEditor',
    props: {
        editor: {
            type: Editor,
            required: true,
        },
    },
    data() {
        return {
            inputTitulo: '',
            classicEditor: ClassicEditor,
            editorHtml: '',
        };
    },
    methods: {
        setTitulo(e: Event) {
            const titulo = (e.target as HTMLInputElement).value;
            this.editor.setTitulo(titulo);
        },
    },
});
</script>

<template>
    <article>
        <header>Dados do formulário</header>
        <ckeditor
            :editor="classicEditor"
            v-model="editorHtml"
            :config="{}"
        ></ckeditor>
        {{ editorHtml }}
    </article>
</template>
