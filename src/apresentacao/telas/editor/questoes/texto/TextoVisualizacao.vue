<script lang="ts">
import { defineComponent } from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import BotoesEdicao from '../comum/BotoesEdicao.vue';
import { Texto } from '@/dominio/processamento/processador/texto/Texto';

export default defineComponent({
    name: 'TextoVisualizacao',
    components: { BotoesEdicao },
    props: {
        texto: {
            type: Texto,
            required: true,
        },
    },
    data() {
        return {
            classicEditor: ClassicEditor,
            editorHtml: '',
        };
    },
    emits: ['excluiu', 'desceu', 'subiu', 'editou'],
});
</script>

<template>
    <li>
        {{ texto.categoria }}: {{ texto.texto }}
        <BotoesEdicao
            @editou="$emit('editou')"
            @excluiu="$emit('excluiu')"
            @desceu="$emit('desceu')"
            @subiu="$emit('subiu')"
        ></BotoesEdicao>
    </li>
</template>

<style scoped>
li {
    padding: 20px 40px;
}

li:hover {
    border-radius: var(--border-radius);
    background: var(--card-background-color);
    box-shadow: var(--card-box-shadow);
}
</style>
