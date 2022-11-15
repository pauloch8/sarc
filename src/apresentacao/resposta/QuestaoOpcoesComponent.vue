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
    computed: {
        getTextos() {
            try {
                return this.questao.getTextos();
            } catch (e) {
                console.log(e);
                return '';
            }
        },
    },
});
</script>

<template>
    <article>
        <header>
            <h2>{{ questao.getTitulo() }}</h2>
            <h3 v-if="questao.getSubtitulo()">{{ JSON.stringify(questao) }}</h3>
            {{ questao.opcaoSelecionada }}
            <br />
            <br />
            {{ getTextos }}
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
            <strong>Preencha as variáveis para a resposta:</strong>
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
