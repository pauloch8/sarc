<script lang="ts">
import { Opcao } from '@/dominio/formulario/questoes/opcoes/Opcao';
import { QuestaoDeSelecao } from '@/dominio/formulario/questoes/selecao/QuestaoDeSelecao';
import { Selecao } from '@/dominio/formulario/questoes/selecao/Selecao';
import { defineComponent } from 'vue';
import SelecaoComponent from './SelecaoComponent.vue';

export default defineComponent({
    name: 'QuestaoSelecoesComponent',
    props: {
        questao: {
            type: QuestaoDeSelecao,
            required: true,
        },
    },
    data() {
        return {
            filtroSelecoes: '',
            estaQuestao: this.questao,
            selecoes: [] as Selecao[],
        };
    },
    components: {
        SelecaoComponent,
    },
    emits: ['opcaoSelecionada'],
    computed: {
        selecaoesFiltradas() {
            return this.estaQuestao.selecoes.filter(selecao => {
                return (selecao as Selecao)
                    .getLabel()
                    .toLowerCase()
                    .includes(this.filtroSelecoes.toLowerCase());
            });
        },
    },
    methods: {
        selecionarValor(selecao: Selecao) {
            this.selecoes.push(selecao);
            this.questao.setValoresSelecionado(this.selecoes);
        },
        deselecionarValor(selecao: Selecao) {
            const indice = this.selecoes.indexOf(selecao);
            this.selecoes.splice(indice, 1);
            this.questao.setValoresSelecionado(this.selecoes);
        },
        consoleLog(valor: any) {
            console.log(valor);
        },
    },
});
</script>

<template>
    <div>
        <article>
            <header>
                <h2>{{ estaQuestao.getTitulo() }}</h2>
                <span v-if="estaQuestao.getSubtitulo()">{{
                    estaQuestao.getSubtitulo()
                }}</span>
            </header>
            <label for="filtraSelecoes">
                Filtrar seleções
                <input
                    type="text"
                    id="filtroSelecoes"
                    name="filtroSelecoes"
                    placeholder="Filtrar Seleções"
                    v-model="filtroSelecoes"
                    required
                />
            </label>
            <fieldset>
                <SelecaoComponent
                    v-for="selecao in selecaoesFiltradas"
                    :key="selecao.getId()"
                    :valores-selecionados="selecoes"
                    :selecao="selecao as Selecao"
                    :questaoId="estaQuestao.getId()"
                    @valor-selecionado="selecionarValor"
                    @valor-deselecionado="deselecionarValor"
                ></SelecaoComponent>
            </fieldset>
        </article>
    </div>
</template>

<style scoped>
header {
    margin-bottom: 20px;
}
header h1,
header h2,
header h3 {
    margin-bottom: 0px;
}
header h3 {
    margin-top: 15px;
}
footer {
    margin-top: 20px;
}
fieldset {
    max-height: 500px;
    overflow: auto;
}
</style>
