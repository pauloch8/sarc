<script lang="ts">
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'RelatorioComponent',
    props: {
        relatorio: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            esteRelatorio: this.relatorio,
            editor: ClassicEditor,
        };
    },
});
</script>

<template>
    <ckeditor :editor="editor" v-model="esteRelatorio" :config="{}"></ckeditor>
</template>
