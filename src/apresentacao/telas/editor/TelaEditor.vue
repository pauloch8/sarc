<script lang="ts">
import { defineComponent, inject } from 'vue';
import FormularioEdicao from './FormularioEdicao.vue';
import { FormularioEditor } from '@/dominio/editor/FormularioEditor';
import { IEspecificacaoRepository } from '@/dominio/especificacao/EspecificacaoRepository';
import { IFormularioEditorFactory } from '@/dominio/editor/FormularioEditorFactory';
import { EspecificacaoDTO } from '@/dominio/especificacao/EspecificacaoDTO';

export default defineComponent({
    name: 'TelaEditor',
    components: {
        FormularioEdicao,
    },
    setup() {
        // injeta especificacaoRepository
        const especificacaoRepository = inject<IEspecificacaoRepository>(
            'especificacaoRepository',
        );
        if (!especificacaoRepository) {
            throw new Error(
                'Não injetada a dependência especificacaoRepository',
            );
        }
        // injeta formularioEditorFactory
        const formularioEditorFactory = inject<IFormularioEditorFactory>(
            'formularioEditorFactory',
        );
        if (!formularioEditorFactory) {
            throw new Error(
                'Não injetada a dependência formularioEditorFactory',
            );
        }

        // carrega o editor
        // TODO: carregar do id passado por query string
        const especificacao =
            especificacaoRepository.carregar('programa_de_votos');
        const editor =
            formularioEditorFactory.criarDaEspecificacao(especificacao);

        return {
            editor,
            especificacaoRepository,
        };
    },
    methods: {
        criar(especificacao: EspecificacaoDTO) {
            this.especificacaoRepository.armazenar(especificacao);
        },
        alterar(especificacao: EspecificacaoDTO) {
            this.especificacaoRepository.armazenar(especificacao);
        },
    },
});
</script>

<template>
    <FormularioEdicao
        :editor="(editor as FormularioEditor)"
        @criou="criar"
        @atualizou="alterar"
    ></FormularioEdicao>
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
