<script lang="ts">
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { defineComponent } from 'vue';
import { TextoProcessado } from '@/dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormulario';

export default defineComponent({
    name: 'RelatorioComponent',
    props: {
        relatorio: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            esteRelatorio: this.relatorio as TextoProcessado,
            editor: ClassicEditor,
        };
    },
});
</script>

<template>
    <div>
        <h2>{{ esteRelatorio.titulo }}</h2>
        <ckeditor
            :editor="editor"
            v-model="esteRelatorio.texto"
            :config="{}"
        ></ckeditor>
    </div>
</template>
