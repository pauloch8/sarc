<script lang="ts">
import { ListaEditavel } from '@/dominio/editor/comum/ListaEditavel';
import { QuestaoOpcaoEditavel } from '@/dominio/editor/questoes/questao-opcao/QuestaoOpcaoEditavel';
import { defineComponent } from 'vue';
import ItemDeQuestaoOpcao from './questao-opcao/ItemDeQuestaoOpcao.vue';
import ItemDeQuestaoSelecao from './questao-selecao/ItemDeQuestaoSelecao.vue';
import { QuestaoSelecaoEditavel } from '@/dominio/editor/questoes/questao-selecao/QuestaoSelecaoEditavel';
import AdicionarQuestaoSelecao from './questao-selecao/AdicionarQuestaoSelecao.vue';
import AdicionarQuestaoOpcao from './questao-opcao/AdicionarQuestaoOpcao.vue';

export default defineComponent({
    name: 'ListaQuestoes',
    components: {
        ItemDeQuestaoOpcao,
        ItemDeQuestaoSelecao,
        AdicionarQuestaoSelecao,
        AdicionarQuestaoOpcao,
    },
    props: {
        lista: {
            type: ListaEditavel,
            required: true,
        },
    },
    data() {
        return {
            estaLista: this.lista as ListaEditavel<QuestaoOpcaoEditavel>,
        };
    },
    computed: {
        itensOrdenados() {
            const retorno = (
                this.lista as ListaEditavel<
                    QuestaoOpcaoEditavel | QuestaoSelecaoEditavel
                >
            )
                .getItens()
                .sort((a, b) => {
                    const indiceA = a.getIndice();
                    const indiceB = b.getIndice();
                    if (indiceA < indiceB) {
                        return -1;
                    }
                    if (indiceA > indiceB) {
                        return 1;
                    }
                    return 0;
                });
            return retorno;
        },
    },
    methods: {
        editar(item: QuestaoOpcaoEditavel) {
            this.estaLista.editarItem(item);
        },
        adicionarItem(item: QuestaoOpcaoEditavel) {
            this.estaLista.adicionarItem(item);
        },
        excluir(item: QuestaoOpcaoEditavel) {
            this.estaLista.excluirItem(item);
        },
        descer(item: QuestaoOpcaoEditavel) {
            this.estaLista.descerItem(item);
        },
        subir(item: QuestaoOpcaoEditavel) {
            this.estaLista.subirItem(item);
        },
    },
});
</script>

<template>
    <h2>Questões</h2>

    <TransitionGroup name="questoes">
        <div
            v-for="(questao, indice) in itensOrdenados"
            :key="questao.getId().toString()"
        >
            <ItemDeQuestaoOpcao
                v-if="questao.tipo === 'opcao'"
                :questao="(questao as QuestaoOpcaoEditavel)"
                :ehPrimeiro="indice === 0"
                :ehUltimo="indice === itensOrdenados.length - 1"
                :indice="indice"
                @editar="editar"
                @excluir="excluir"
                @descer="descer"
                @subir="subir"
            ></ItemDeQuestaoOpcao>
            <ItemDeQuestaoSelecao
                v-if="questao.tipo === 'selecao'"
                :questao="(questao as QuestaoSelecaoEditavel)"
                :ehPrimeiro="indice === 0"
                :ehUltimo="indice === itensOrdenados.length - 1"
                @editar="editar"
                @excluir="excluir"
                @descer="descer"
                @subir="subir"
            ></ItemDeQuestaoSelecao>
        </div>
    </TransitionGroup>

    <AdicionarQuestaoOpcao
        :indice="itensOrdenados.length"
        @adicionarItem="adicionarItem"
    ></AdicionarQuestaoOpcao>
    <AdicionarQuestaoSelecao
        :indice="itensOrdenados.length"
        @adicionarItem="adicionarItem"
    ></AdicionarQuestaoSelecao>
</template>

<style scoped>
.questoes-move {
    transition: all 0.5s ease-in-out;
}
</style>
