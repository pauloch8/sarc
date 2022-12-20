<script lang="ts">
import { defineComponent } from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default defineComponent({
    name: 'TelaCkEditor',
    data() {
        return {
            classicEditor: ClassicEditor,
            editorHtml: '',
        };
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
