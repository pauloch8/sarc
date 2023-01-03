<script lang="ts">
import { defineComponent, inject } from 'vue';
import IdFormularioInput from './comum/IdFormularioInput.vue';
import TituloInput from './comum/TituloInput.vue';
import SubtituloInput from './comum/SubtituloInput.vue';
import BotoesSalvarCancelar from './questoes/comum/BotoesSalvarCancelar.vue';
import { IdFormulario } from '@/dominio/editor/IdFormulario';
import { Subtitulo } from '@/dominio/editor/Subtitulo';
import { Titulo } from '@/dominio/editor/Titulo';
import { FormularioEditor } from '@/dominio/editor/FormularioEditor';
import { FormularioEditorFactory } from '@/dominio/editor/FormularioEditorFactory';

export default defineComponent({
    name: 'FormularioEditor',
    setup() {
        const factory = inject<FormularioEditorFactory>(
            'formularioEditorFactory',
        );
        if (!factory) {
            throw new Error(
                'Não injetada a dependência FormularioEditorFactory',
            );
        }
        return {
            factory,
        };
    },
    components: {
        IdFormularioInput,
        TituloInput,
        SubtituloInput,
        BotoesSalvarCancelar,
    },
    props: {
        editor: {
            type: FormularioEditor,
            required: false,
        },
    },
    data() {
        const esteEditor = this.editor;
        const questoes = this.editor?.getQuestoes();
        const id = this.editor?.getId();
        const titulo = this.editor?.getTitulo();
        const subtitulo = this.editor?.getSubtitulo();
        return {
            esteEditor,
            questoes,
            id,
            titulo,
            subtitulo,
        };
    },
    methods: {
        alterouId(id: IdFormulario) {
            this.id = id;
        },
        alterouTitulo(titulo: Titulo) {
            this.titulo = titulo;
        },
        alterouSubtitulo(subtitulo?: Subtitulo) {
            this.subtitulo = subtitulo;
        },
        salvar() {
            if (!this.id) throw new Error('Id não informado');
            if (!this.titulo) throw new Error('Título não informado');
            if (this.editor) {
                this.editor.setId(this.id as IdFormulario);
                this.editor.setTitulo(this.titulo as Titulo);
                this.editor.setSubtitulo(this.subtitulo as Subtitulo);
                this.$emit('editou', this.editor);
            } else {
                const formulario = this.factory.criarNovo(
                    this.id as IdFormulario,
                    this.titulo as Titulo,
                    this.subtitulo as Subtitulo,
                );
                this.$emit('criou', formulario);
                console.log(formulario);
            }
        },
        cancelar() {
            // TODO: CANCELAR
            alert('cancelou');
        },
    },
    emits: ['editou', 'criou'],
});
</script>

<template>
    <article>
        <header>
            <h2>Dados do formulário</h2>
            {{ { id, titulo, subtitulo } }}
        </header>

        <IdFormularioInput
            v-if="titulo"
            :titulo="(titulo as Titulo)"
            @gerouId="alterouId"
        ></IdFormularioInput>
        <IdFormularioInput v-else @gerouId="alterouId"></IdFormularioInput>

        <TituloInput
            v-if="titulo"
            :titulo="(titulo as Titulo)"
            @digitou="alterouTitulo"
        ></TituloInput>
        <TituloInput v-else @digitou="alterouTitulo"></TituloInput>

        <SubtituloInput
            v-if="subtitulo"
            :subtitulo="(subtitulo as Subtitulo)"
            @digitou="alterouSubtitulo"
        ></SubtituloInput>
        <SubtituloInput v-else @digitou="alterouSubtitulo"></SubtituloInput>

        <footer>
            <BotoesSalvarCancelar
                @cancelou="cancelar"
                @salvou="salvar"
            ></BotoesSalvarCancelar>
        </footer>
    </article>
</template>