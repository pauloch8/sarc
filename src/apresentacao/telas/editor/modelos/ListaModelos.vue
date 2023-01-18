<script lang="ts">
import { ListaEditavel } from '@/dominio/editor/comum/ListaEditavel';
import { ModeloEditavel } from '@/dominio/editor/modelo/ModeloEditavel';
import { defineComponent } from 'vue';
import ItemDeModelo from './ItemDeModelo.vue';
import AdicionarModelo from './AdicionarModelo.vue';

export default defineComponent({
    name: 'ListaModelo',
    components: {
        ItemDeModelo,
        AdicionarModelo,
    },
    props: {
        lista: {
            type: ListaEditavel,
            required: true,
        },
    },
    data() {
        return {
            estaLista: this.lista as ListaEditavel<ModeloEditavel>,
        };
    },
    computed: {
        itensOrdenados() {
            const retorno = (this.lista as ListaEditavel<ModeloEditavel>)
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
        editar(item: ModeloEditavel) {
            this.estaLista.editarItem(item);
        },
        adicionarItem(item: ModeloEditavel) {
            this.estaLista.adicionarItem(item);
        },
        excluir(item: ModeloEditavel) {
            this.estaLista.excluirItem(item);
        },
        descer(item: ModeloEditavel) {
            this.estaLista.descerItem(item);
        },
        subir(item: ModeloEditavel) {
            this.estaLista.subirItem(item);
        },
    },
});
</script>

<template>
    <h3>Modelo</h3>

    <TransitionGroup name="modelos">
        <ItemDeModelo
            v-for="(modelo, indice) in itensOrdenados"
            :key="indice"
            :modelo="(modelo as ModeloEditavel)"
            :ehPrimeiro="indice === 0"
            :ehUltimo="indice === itensOrdenados.length - 1"
            @editar="editar"
            @excluir="excluir"
            @descer="descer"
            @subir="subir"
        ></ItemDeModelo>
    </TransitionGroup>

    <AdicionarModelo
        :indice="itensOrdenados.length"
        @adicionarItem="adicionarItem"
    ></AdicionarModelo>
</template>

<style scoped>
.modelos-move {
    transition: all 0.5s ease-in-out;
}
</style>
