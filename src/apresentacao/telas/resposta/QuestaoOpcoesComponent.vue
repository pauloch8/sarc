<script lang="ts">
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
    components: {
        OpcaoComponent,
        VariavelComponent,
    },
});
</script>

<template>
    <article>
        <header>
            <h2>{{ questao.getTitulo() }}</h2>
            <span v-if="questao.getSubtitulo()">{{
                questao.getSubtitulo()
            }}</span>
        </header>
        <fieldset>
            <opcao-component
                v-for="opcao in questao.opcoes"
                :key="opcao.getId()"
                :model-value="questao.getValorSelecionado()"
                :opcao="opcao"
                :questaoId="questao.getId()"
                @opcao-selecionada="questao.setValorSelecionado($event)"
            ></opcao-component>
        </fieldset>
        <footer v-if="questao.getValorSelecionado()?.getVariaveis()">
            <h4>Preencha as variáveis para a resposta:</h4>
            <variavel-component
                v-for="variavel in questao
                    .getValorSelecionado()
                    ?.getVariaveis()"
                :key="variavel.getId()"
                :variavel="variavel"
                :valor="variavel.getValor()"
                @update:valor="variavel.setValor($event)"
            ></variavel-component>
        </footer>
    </article>
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
