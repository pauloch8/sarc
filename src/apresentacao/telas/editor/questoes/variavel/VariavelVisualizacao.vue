<script lang="ts">
import { defineComponent } from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import BotoesEdicao from '../comum/BotoesEdicao.vue';
import { Variavel } from '@/dominio/formulario/questoes/Variavel';

export default defineComponent({
    name: 'VariavelVisualizacao',
    components: { BotoesEdicao },
    props: {
        variavel: {
            type: Variavel,
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
        {{ variavel.getTipo() }}: {{ variavel.getLabel() }}
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
