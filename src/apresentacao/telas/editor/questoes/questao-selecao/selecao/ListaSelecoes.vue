<script lang="ts">
import { defineComponent } from 'vue';
import ItemDeSelecao from './ItemDeSelecao.vue';
import AdicionarSelecao from './AdicionarSelecao.vue';
import { SelecaoEditavel } from '@/dominio/editor/questoes/questao-selecao/selecao/SelecaoEditavel';
import { ListaEditavel } from '@/dominio/editor/comum/ListaEditavel';

export default defineComponent({
    name: 'ListaSelecoes',
    components: {
        ItemDeSelecao,
        AdicionarSelecao,
    },
    props: {
        lista: {
            type: ListaEditavel,
            required: true,
        },
    },
    data() {
        return {
            estaLista: this.lista as ListaEditavel<SelecaoEditavel>,
        };
    },
    computed: {
        itensOrdenados(): SelecaoEditavel[] {
            const retorno = (this.lista as ListaEditavel<SelecaoEditavel>)
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
        editar(item: SelecaoEditavel) {
            this.estaLista.editarItem(item);
        },
        adicionarItem(item: SelecaoEditavel) {
            this.estaLista.adicionarItem(item);
        },
        excluir(item: SelecaoEditavel) {
            this.estaLista.excluirItem(item);
        },
        descer(item: SelecaoEditavel) {
            this.estaLista.descerItem(item);
        },
        subir(item: SelecaoEditavel) {
            this.estaLista.subirItem(item);
        },
    },
});
</script>

<template>
    <h3>Opções</h3>

    <div class="lista-opcoes">
        <TransitionGroup name="opcoes">
            <ItemDeSelecao
                v-for="(selecao, indice) in itensOrdenados"
                :key="selecao.getId().toString()"
                :selecao="(selecao as SelecaoEditavel)"
                :ehPrimeiro="indice === 0"
                :ehUltimo="indice === itensOrdenados.length - 1"
                @editar="editar"
                @excluir="excluir"
                @descer="descer"
                @subir="subir"
            ></ItemDeSelecao>
        </TransitionGroup>
    </div>

    <AdicionarSelecao
        :indice="itensOrdenados.length"
        @adicionarItem="adicionarItem"
    ></AdicionarSelecao>
</template>

<style scoped>
.opcoes-move {
    transition: all 0.5s ease-in-out;
}

.lista-opcoes {
    margin-bottom: 40px;
}
</style>
