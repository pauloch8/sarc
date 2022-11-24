<script lang="ts">
import { QuestaoDeOpcoes } from '@/dominio/formulario/questoes/opcoes/QuestaoDeOpcoes';
import { defineComponent } from 'vue';
import OpcaoComponent from './OpcaoComponent.vue';

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
        <footer v-if="questao.valorSelecionado?.getVariaveis()">
            <h4>Preencha as variáveis para a resposta:</h4>
            <template
                v-for="variavel in questao.valorSelecionado?.getVariaveis()"
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
