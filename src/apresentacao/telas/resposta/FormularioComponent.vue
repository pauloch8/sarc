<script lang="ts">
import { Formulario } from '@/dominio/formulario/Formulario';
import { ProcessadorDeRespostaDeFormulario } from '@/dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormulario';
import { defineComponent } from 'vue';
import QuestaoOpcoes from './QuestaoOpcoesComponent.vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { especificacao } from '@/apresentacao/assets/especificacao';

export default defineComponent({
    name: 'FormularioComponent',
    data() {
        const editorData = especificacao.template;
        return {
            editor: ClassicEditor,
            editorData,
            editorConfig: {
                // The configuration of the editor.
            },
        };
    },
    props: {
        formulario: {
            type: Formulario,
            required: true,
        },
        processadorFormulario: {
            type: ProcessadorDeRespostaDeFormulario,
            required: true,
        },
    },
    components: {
        QuestaoOpcoes,
    },
    methods: {
        gerar() {
            try {
                const texto = this.processadorFormulario.processar(
                    this.formulario.getRespostas(),
                );
                console.log({ texto });
                this.editorData = texto;
            } catch (e) {
                console.error((e as Error).message);
                return '';
            }
        },
    },
    computed: {
        resposta() {
            try {
                return this.formulario.getRespostas();
            } catch (e) {
                console.error((e as Error).message);
                return '';
            }
        },
        processado() {
            try {
                return this.processadorFormulario.processar(
                    this.formulario.getRespostas(),
                );
            } catch (e) {
                console.error((e as Error).message);
                return '';
            }
        },
    },
});
</script>

<template v-if="formulario">
    <h1>{{ formulario.getTitulo() }}</h1>
    <h2 v-if="formulario.getSubtitulo()">
        {{ formulario.getSubtitulo() }}
    </h2>
    <template v-for="questao in formulario.getQuestoes()" :key="questao.rotulo">
        <questao-opcoes :questao="questao" />
    </template>
    <button @click="gerar">Gerar</button>
    <ckeditor
        :editor="editor"
        v-model="editorData"
        :config="editorConfig"
    ></ckeditor>
    {{ editorData }}
</template>
