<script lang="ts">
import { QuestaoDeOpcoes } from '@/dominio/formulario/questoes/opcoes/QuestaoDeOpcoes';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'QuestaoOpcoesComponent',
    props: {
        questao: {
            type: QuestaoDeOpcoes,
            required: true,
        },
    },
});
</script>

<template>
    <article>
        <header>
            <h2>{{ questao.getTitulo() }}</h2>
            <h3 v-if="questao.getSubtitulo()">{{ JSON.stringify(questao) }}</h3>
        </header>
        <fieldset>
            <template v-for="opcao in questao.opcoes" :key="opcao.id">
                <label :for="opcao.getId()">
                    <input
                        type="radio"
                        :name="questao.getId()"
                        :id="opcao.getId()"
                        :value="opcao.getId()"
                        @click="questao.selecionarOpcao(opcao)"
                    />
                    {{ opcao.getLabel() }}
                </label>
            </template>
        </fieldset>
        <footer v-if="questao.opcaoSelecionada?.getVariaveis()">
            <h4>Preencha as variáveis para a resposta:</h4>
            <template
                v-for="variavel in questao.opcaoSelecionada?.getVariaveis()"
                :key="variavel.id"
            >
                <label :for="variavel.getId()">
                    {{ variavel.getLabel() }}
                    <input
                        type="text"
                        :id="variavel.getId()"
                        :name="variavel.getId()"
                        v-model="variavel.resposta"
                        required
                    />
                </label>
            </template>
        </footer>
    </article>
</template>

<style scoped>
header h1,
header h2,
header h3 {
    margin-bottom: 25px;
}
</style>
