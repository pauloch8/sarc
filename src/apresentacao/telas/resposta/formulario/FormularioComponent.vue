<script lang="ts">
import { Formulario } from '@/dominio/formulario/Formulario';
import { ProcessadorDeRespostaDeFormulario } from '@/dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormulario';
import { defineComponent } from 'vue';
import QuestaoOpcoes from './questao-opcoes/QuestaoOpcoesComponent.vue';
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
        return {
            esteFormulario: this.formulario,
        };
    },
    components: {
        QuestaoOpcoes,
        BotaoGerarRelatorio,
    },
    methods: {
        gerouRelatorio(relatorio: string) {
            this.$emit('gerouRelatorio', relatorio);
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
            <QuestaoOpcoes
                :questao="questao as QuestaoDeOpcoes"
                v-for="questao of esteFormulario.getQuestoes()"
                :key="questao.getId()"
            ></QuestaoOpcoes>
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
