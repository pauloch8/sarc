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
    methods: {
        voltouParaFormulario() {
            this.$emit('voltouParaFormulario');
        },
    },
    emits: ['voltouParaFormulario'],
});
</script>

<template>
    <div>
        <ckeditor
            :editor="editor"
            v-model="esteRelatorio"
            :config="{}"
        ></ckeditor>
        <button @click="voltouParaFormulario">Voltar para o Formulário</button>
    </div>
</template>
