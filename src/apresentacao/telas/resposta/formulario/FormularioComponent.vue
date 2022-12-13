<script lang="ts">
import {
    ProcessadorDeRespostaDeFormulario,
    TextoProcessado,
} from '@/dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormulario';
import { Formulario } from '@/dominio/formulario/Formulario';
import { QuestaoDeOpcoes } from '@/dominio/formulario/questoes/opcoes/QuestaoDeOpcoes';
import { QuestaoDeSelecao } from '@/dominio/formulario/questoes/selecao/QuestaoDeSelecao';
import { defineComponent } from 'vue';
import QuestaoOpcoes from './questao-opcoes/QuestaoOpcoesComponent.vue';
import QuestaoSelecoes from './questao-selecoes/QuestaoSelecoesComponent.vue';
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
        return {
            esteFormulario: this.formulario,
        };
    },
    components: {
        QuestaoOpcoes,
        QuestaoSelecoes,
        BotaoGerarRelatorio,
    },
    methods: {
        gerouRelatorio(textosProcessados: TextoProcessado[]) {
            this.$emit('gerouRelatorio', textosProcessados);
        },
    },
    emits: ['gerouRelatorio'],
});
</script>

<template>
    <div>
        <h1>{{ esteFormulario.getTitulo() }}</h1>
        <h2 v-if="esteFormulario.getSubtitulo()">
            {{ esteFormulario.getSubtitulo() }}
        </h2>

        <TransitionGroup tag="QuestaoOpcoes">
            <div
                v-for="questao of esteFormulario.getQuestoes()"
                :key="questao.getId()"
            >
                <QuestaoOpcoes
                    v-if="questao.getTipo() === 'opcao'"
                    :questao="questao as QuestaoDeOpcoes"
                ></QuestaoOpcoes>
                <QuestaoSelecoes
                    v-else-if="questao.getTipo() === 'selecao'"
                    :questao="questao as QuestaoDeSelecao"
                ></QuestaoSelecoes>
            </div>
        </TransitionGroup>

        <BotaoGerarRelatorio
            :formulario="formulario"
            :processadorFormulario="processadorFormulario"
            @gerou-relatorio="gerouRelatorio"
        ></BotaoGerarRelatorio>
    </div>
</template>

<style scoped>
.v-enter-active {
    transition: all 0.3s ease-out 0.3s;
}

.v-leave-active {
    transition: all 0.3s ease-in;
}

.v-leave-to,
.v-enter-from {
    transform: translateX(-200px);
    opacity: 0;
}
</style>
