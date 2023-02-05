<script lang="ts">
import { ListaEditavel } from '@/dominio/editor/comum/ListaEditavel';
import { QuestaoEditavel } from '@/dominio/editor/questoes/questao-opcao/QuestaoEditavel';
import { defineComponent } from 'vue';
import ItemDeQuestao from './ItemDeQuestao.vue';
import AdicionarQuestao from './AdicionarQuestao.vue';

export default defineComponent({
    name: 'ListaQuestoes',
    components: {
        ItemDeQuestao,
        AdicionarQuestao,
    },
    props: {
        lista: {
            type: ListaEditavel,
            required: true,
        },
    },
    data() {
        return {
            estaLista: this.lista as ListaEditavel<QuestaoEditavel>,
        };
    },
    computed: {
        itensOrdenados() {
            const retorno = (this.lista as ListaEditavel<QuestaoEditavel>)
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
        editar(item: QuestaoEditavel) {
            this.estaLista.editarItem(item);
        },
        adicionarItem(item: QuestaoEditavel) {
            this.estaLista.adicionarItem(item);
        },
        excluir(item: QuestaoEditavel) {
            this.estaLista.excluirItem(item);
        },
        descer(item: QuestaoEditavel) {
            this.estaLista.descerItem(item);
        },
        subir(item: QuestaoEditavel) {
            this.estaLista.subirItem(item);
        },
    },
});
</script>

<template>
    <h2>Questões</h2>

    <TransitionGroup name="questoes">
        <ItemDeQuestao
            v-for="(questao, indice) in itensOrdenados"
            :key="questao.getId().toString()"
            :questao="(questao as QuestaoEditavel)"
            :ehPrimeiro="indice === 0"
            :ehUltimo="indice === itensOrdenados.length - 1"
            @editar="editar"
            @excluir="excluir"
            @descer="descer"
            @subir="subir"
        ></ItemDeQuestao>
    </TransitionGroup>

    <AdicionarQuestao
        :indice="itensOrdenados.length"
        @adicionarItem="adicionarItem"
    ></AdicionarQuestao>
</template>

<style scoped>
.questoes-move {
    transition: all 0.5s ease-in-out;
}
</style>
