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

<template>
    <article>
        <header>
            <h2>{{ questao.titulo }}</h2>
            <h3 v-if="questao.subtitulo">{{ questao.subtitulo }}</h3>
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
            <strong>Preencha as variáveis para a resposta:</strong>
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

<style scoped>
header h1,
header h2,
header h3 {
    margin-bottom: 25px;
}
</style>
