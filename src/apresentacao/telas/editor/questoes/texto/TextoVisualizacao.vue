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
    emits: ['excluir', 'descer', 'subir', 'editar'],
});
</script>

<template>
    <li>
        {{ texto.categoria }}: {{ texto.texto }}
        <BotoesEdicao
            @editou="$emit('editar')"
            @excluiu="$emit('excluir')"
            @desceu="$emit('descer')"
            @subiu="$emit('subir')"
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
