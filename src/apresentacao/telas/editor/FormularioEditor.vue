<script lang="ts">
import { defineComponent, inject } from 'vue';
import IdFormularioInput from './comum/IdFormularioInput.vue';
import TituloInput from './comum/TituloInput.vue';
import SubtituloInput from './comum/SubtituloInput.vue';
import BotoesSalvarCancelar from './comum/BotoesSalvarCancelar.vue';
import ListaQuestoes from './questoes/questao-opcao/ListaQuestoes.vue';
import { IdFormulario } from '@/dominio/editor/IdFormulario';
import { Subtitulo } from '@/dominio/editor/Subtitulo';
import { Titulo } from '@/dominio/editor/Titulo';
import { FormularioEditor } from '@/dominio/editor/FormularioEditor';
import { FormularioEditorFactory } from '@/dominio/editor/FormularioEditorFactory';
import { ListaEditavel } from '@/dominio/editor/ListaEditavel';
import { QuestaoEditavel } from '@/dominio/editor/QuestaoEditavel';
import { ItemEditavel } from '@/dominio/editor/ItemEditavel';

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
        ListaQuestoes,
    },
    props: {
        editor: {
            type: FormularioEditor,
            required: false,
        },
    },
    data() {
        const esteEditor = this.editor;
        const id = esteEditor?.getId();
        const titulo = esteEditor?.getTitulo();
        const subtitulo = esteEditor?.getSubtitulo();
        const listaQuestoes =
            esteEditor?.getListaQuestoes() ||
            new ListaEditavel<QuestaoEditavel>();
        return {
            esteEditor,
            id,
            titulo,
            subtitulo,
            listaQuestoes,
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
            'cancelou';
        },
    },
    emits: ['editou', 'criou'],
});
</script>

<template>
    <article>
        <header>
            <h2>Edição de formulário</h2>
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

        <ListaQuestoes
            :lista="(listaQuestoes as unknown as ListaEditavel<ItemEditavel>)"
        ></ListaQuestoes>

        <footer>
            <BotoesSalvarCancelar
                @cancelou="cancelar"
                @salvou="salvar"
            ></BotoesSalvarCancelar>
        </footer>
    </article>
</template>

<style lang="scss">
// Não é 'scoped' pois esses estilos valem para todos os componentes filhos
.erro {
    background-color: #e32b2b;
    color: white;

    * {
        color: white;
    }
}
</style>
