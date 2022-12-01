<script lang="ts">
import { Opcao } from '@/dominio/formulario/questoes/opcoes/Opcao';
import { QuestaoDeOpcoes } from '@/dominio/formulario/questoes/opcoes/QuestaoDeOpcoes';
import { defineComponent } from 'vue';
import OpcaoComponent from './OpcaoComponent.vue';
import VariavelComponent from './VariavelComponent.vue';

export default defineComponent({
    name: 'QuestaoOpcoesComponent',
    props: {
        questao: {
            type: QuestaoDeOpcoes,
            required: true,
        },
    },
    data() {
        return {
            minhaQuestao: this.questao,
        };
    },
    components: {
        OpcaoComponent,
        VariavelComponent,
    },
    emits: ['opcaoSelecionada'],
    methods: {
        receberOpcaoSelecionada(opcao: Opcao) {
            this.minhaQuestao.setValorSelecionado(opcao);
            this.$emit('opcaoSelecionada', opcao);
        },
        consoleLog(valor: any) {
            console.log(valor);
        },
    },
});
</script>

<template>
    <transition>
        <article>
            <header>
                <h2>{{ minhaQuestao.getTitulo() }}</h2>
                <span v-if="minhaQuestao.getSubtitulo()">{{
                    minhaQuestao.getSubtitulo()
                }}</span>
            </header>
            <fieldset>
                <OpcaoComponent
                    v-for="opcao in minhaQuestao.opcoes"
                    :key="opcao.getId()"
                    :model-value="minhaQuestao.getValorSelecionado() as Opcao"
                    :opcao="opcao as Opcao"
                    :questaoId="minhaQuestao.getId()"
                    @opcao-selecionada="receberOpcaoSelecionada"
                ></OpcaoComponent>
            </fieldset>
            <footer v-if="minhaQuestao.getValorSelecionado()?.getVariaveis()">
                <h4>Preencha as variáveis para a resposta:</h4>
                <VariavelComponent
                    v-for="variavel in minhaQuestao
                        .getValorSelecionado()
                        ?.getVariaveis()"
                    :key="variavel.getId()"
                    :variavel="variavel"
                    :valor="variavel.getValor()"
                    @update:valor="variavel.setValor($event)"
                ></VariavelComponent>
            </footer>
        </article>
    </transition>
</template>

<style scoped>
header {
    margin-bottom: 20px;
}
header h1,
header h2,
header h3 {
    margin-bottom: 15px;
}
footer {
    margin-top: 20px;
}
</style>
