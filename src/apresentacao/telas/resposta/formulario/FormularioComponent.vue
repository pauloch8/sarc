<script lang="ts">
import { Formulario } from '@/dominio/formulario/Formulario';
import { ProcessadorDeRespostaDeFormulario } from '@/dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormulario';
import { defineComponent } from 'vue';
import QuestaoOpcoes from './questao-opcoes/QuestaoOpcoesComponent.vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { especificacao } from '@/apresentacao/assets/especificacao';
import { QuestaoDeOpcoes } from '@/dominio/formulario/questoes/opcoes/QuestaoDeOpcoes';
import BotaoGerarRelatorio from './BotaoGerarRelatorio.vue';

export default defineComponent({
    name: 'FormularioComponent',
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
    data() {
        const editorData = especificacao.template;
        return {
            esteFormulario: this.formulario,
            erroGerarRespostas: '',
            editor: ClassicEditor,
            editorData: editorData,
            editorConfig: {
                // The configuration of the editor.
            },
        };
    },
    components: {
        QuestaoOpcoes,
        BotaoGerarRelatorio,
    },
    computed: {
        resposta() {
            try {
                return this.esteFormulario.getRespostas();
            } catch (e) {
                console.error((e as Error).message);
                return '';
            }
        },
        processado() {
            try {
                const respostas = this.esteFormulario.getRespostas();
                return this.processadorFormulario.processar(respostas);
            } catch (e) {
                console.error((e as Error).message);
                return '';
            }
        },
        questoes() {
            return this.esteFormulario.getQuestoes();
        },
    },
    methods: {
        apresentarRelatorio(relatorio: string) {
            debugger;
            this.editorData = relatorio;
        },
    },
});
</script>

<template v-if="formulario">
    <h1>{{ esteFormulario.getTitulo() }}</h1>
    <h2 v-if="esteFormulario.getSubtitulo()">
        {{ esteFormulario.getSubtitulo() }}
    </h2>

    <template
        v-for="questao of esteFormulario.getQuestoes()"
        :key="questao.getId()"
    >
        <QuestaoOpcoes :questao="questao as QuestaoDeOpcoes" />
    </template>

    <BotaoGerarRelatorio
        :formulario="formulario"
        :processadorFormulario="processadorFormulario"
        @gerou-relatorio="apresentarRelatorio"
    ></BotaoGerarRelatorio>

    <ckeditor
        :editor="editor"
        v-model="editorData"
        :config="editorConfig"
    ></ckeditor>
</template>
