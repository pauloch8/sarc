<script lang="ts">
import { Formulario } from '@/dominio/formulario/Formulario';
import { ProcessadorDeRespostaDeFormulario } from '@/dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormulario';
import { defineComponent } from 'vue';
import QuestaoOpcoes from './questao-opcoes/QuestaoOpcoesComponent.vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { especificacao } from '@/apresentacao/assets/especificacao';
import { QuestaoDeOpcoes } from '@/dominio/formulario/questoes/opcoes/QuestaoDeOpcoes';
import { Opcao } from '@/dominio/formulario/questoes/opcoes/Opcao';

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
            editor: ClassicEditor,
            editorData: editorData,
            editorConfig: {
                // The configuration of the editor.
            },
        };
    },
    components: {
        QuestaoOpcoes,
    },
    methods: {
        gerar() {
            try {
                debugger;
                const respostas = this.esteFormulario.getRespostas();
                const texto = this.processadorFormulario.processar(respostas);
                console.log({ texto });
                this.editorData = texto;
            } catch (e) {
                console.error((e as Error).message);
                return '';
            }
        },
        receberOpcaoSelecionada(opcao: Opcao) {
            console.log(
                'FormularioComponent: Recebida opcao selecionada',
                opcao,
                this.esteFormulario,
            );
        },
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
        <QuestaoOpcoes
            :questao="questao as QuestaoDeOpcoes"
            @opcao-selecionada="receberOpcaoSelecionada"
        >
        </QuestaoOpcoes>
    </template>
    <button @click="gerar">Gerar</button>
    <ckeditor
        :editor="editor"
        v-model="editorData"
        :config="editorConfig"
    ></ckeditor>
</template>
