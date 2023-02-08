<script lang="ts">
import { defineComponent, inject } from 'vue';
import FormularioEditor from './FormularioEdicao.vue';
import { FormularioEditor as FormularioEditorModel } from '@/dominio/editor/FormularioEditor';
import { IEdicaoDeFormularioService } from '@/aplicacao/EdicaoDeFormularioService';

export default defineComponent({
    name: 'TelaEditor',
    components: {
        FormularioEditor,
    },
    setup() {
        // injeta especificacaoRepository
        const edicaoDeFormularioService = inject<IEdicaoDeFormularioService>(
            'edicaoDeFormularioService',
        );
        if (!edicaoDeFormularioService) {
            throw new Error(
                'Não injetada a dependência edicaoDeFormularioService',
            );
        }

        // carrega o editor
        // TODO: carregar do id passado por query string
        const editor = edicaoDeFormularioService.carregarEditor('teste');

        // retorna o setup
        return {
            editor,
        };
    },
});
</script>

<template>
    <FormularioEditor
        :editor="(editor as FormularioEditorModel)"
    ></FormularioEditor>
</template>

<style>
div {
    user-select: none;
}

.emEdicao {
    border-top-color: #0f3d5d;
    border-top-width: 8px;
    border-top-style: solid;
}

.adicionar {
    margin-left: 40px;
}
</style>
