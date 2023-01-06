<script lang="ts">
import { defineComponent } from 'vue';
import FormularioEditor from './FormularioEditor.vue';
import { FormularioEditor as FormularioEditorModel } from '@/dominio/editor/FormularioEditor';
import { IdFormulario } from '@/dominio/editor/IdFormulario';
import { ListaEditavel } from '@/dominio/editor/ListaEditavel';
import { OpcaoEditavel } from '@/dominio/editor/OpcaoEditavel';
import { QuestaoEditavel } from '@/dominio/editor/QuestaoEditavel';
import { Subtitulo } from '@/dominio/editor/Subtitulo';
import { Titulo } from '@/dominio/editor/Titulo';
import { Texto } from '@/dominio/processamento/processador/texto/Texto';
import { TextoEditavel } from '@/dominio/editor/TextoEditavel';

export default defineComponent({
    name: 'TelaEditor',
    components: {
        FormularioEditor,
    },
    data() {
        const editor = new FormularioEditorModel(
            new IdFormulario('id'),
            new Titulo('titulo'),
            new ListaEditavel<QuestaoEditavel>([
                new QuestaoEditavel(
                    new IdFormulario('questao1'),
                    new Titulo('questao1'),
                    0,
                    new ListaEditavel<OpcaoEditavel>([
                        new OpcaoEditavel(
                            new IdFormulario('questao1'),
                            new Titulo('questao1'),
                            0,
                            new ListaEditavel<TextoEditavel>([
                                new TextoEditavel('categoria', 'texto', 0),
                            ]),
                        ),
                    ]),
                    new Subtitulo('questao1'),
                ),
                new QuestaoEditavel(
                    new IdFormulario('questao2'),
                    new Titulo('questao2'),
                    1,
                    new ListaEditavel<OpcaoEditavel>([
                        new OpcaoEditavel(
                            new IdFormulario('questao2'),
                            new Titulo('questao2'),
                            0,
                            new ListaEditavel<TextoEditavel>([
                                new TextoEditavel('categoria', 'questao2', 0),
                            ]),
                        ),
                    ]),
                    new Subtitulo('questao2'),
                ),
            ]),
        );
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
