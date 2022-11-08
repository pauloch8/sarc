<template>
    <article>
        <header>
            {{ questao.rotulo }}
        </header>
        <fieldset>
            <template v-for="valor in questao.opcoes.valores" :key="valor.id">
                <label :for="valor.id">
                    <input
                        v-model="resposta"
                        :type="tipoDeInput"
                        :name="questao.id"
                        :id="valor.id"
                        :value="valor.id"
                    />
                    {{ valor.label }}
                </label>
            </template>
        </fieldset>
        <footer v-if="valorSelecionado?.variaveis">
            <hgroup>Preencha as variáveis para a resposta:</hgroup>
            <template
                v-for="variavel in valorSelecionado?.variaveis"
                :key="variavel.id"
            >
                <label :for="variavel.id">
                    {{ variavel.label }}
                    <input
                        type="text"
                        :id="variavel.id"
                        :name="variavel.id"
                        required
                    />
                </label>
            </template>
        </footer>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'QuestaoOpcoes',
    props: ['questao'],
    computed: {
        tipoDeInput() {
            switch (this.questao.opcoes.tipo) {
                case 'uma resposta':
                    return 'radio';
                case 'várias respostas':
                    return 'checkbox';
                default:
                    return 'radio';
            }
        },
        valorSelecionado() {
            const valorSelecionado: any = this.questao.opcoes.valores.find(
                (valor: any) => valor.id === this.resposta,
            );
            return valorSelecionado;
        },
        valorSelecionadoTemVariaveis(): any {
            return !!this.valorSelecionado?.variaveis;
        },
    },
    data() {
        return {
            resposta: [],
        };
    },
});
</script>
