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
    emits: ['excluiuOpcao', 'desceuOpcao', 'subiuOpcao', 'editouOpcao'],
});
</script>

<template>
    <li>
        {{ variavel.getTipo() }}: {{ variavel.getLabel() }}
        <BotoesEdicao
            @editou="$emit('editouOpcao')"
            @excluiu="$emit('excluiuOpcao')"
            @desceu="$emit('desceuOpcao')"
            @subiu="$emit('subiuOpcao')"
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
