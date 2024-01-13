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
    <article>
        <h2>{{ esteRelatorio.titulo }}</h2>
        <ckeditor
            :editor="editor"
            v-model="esteRelatorio.texto"
            :config="{}"
        ></ckeditor>
    </article>
</template>

<style>
@media print {
    div.ck.ck-content.ck-editor__editable {
        visibility: visible;
        position: absolute;
        left: 0;
        top: 0;
        width: 720px;
        transform: translate(-120px, -230px);
        border: none;
    }
}
</style>
