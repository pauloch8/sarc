<script lang="ts">
import { ListaEditavel } from '@/dominio/editor/comum/ListaEditavel';
import { TextoEditavel } from '@/dominio/editor/questoes/comum/texto/TextoEditavel';
import { defineComponent } from 'vue';
import ItemDeTexto from './ItemDeTexto.vue';
import AdicionarTexto from './AdicionarTexto.vue';

export default defineComponent({
    name: 'ListaTextos',
    components: {
        ItemDeTexto,
        AdicionarTexto,
    },
    props: {
        lista: {
            type: ListaEditavel,
            required: true,
        },
    },
    data() {
        return {
            estaLista: this.lista as ListaEditavel<TextoEditavel>,
        };
    },
    computed: {
        itensOrdenados() {
            const retorno = (this.lista as ListaEditavel<TextoEditavel>)
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
        editar(item: TextoEditavel) {
            this.estaLista.editarItem(item);
        },
        adicionarItem(item: TextoEditavel) {
            this.estaLista.adicionarItem(item);
        },
        excluir(item: TextoEditavel) {
            this.estaLista.excluirItem(item);
        },
        descer(item: TextoEditavel) {
            this.estaLista.descerItem(item);
        },
        subir(item: TextoEditavel) {
            this.estaLista.subirItem(item);
        },
    },
});
</script>

<template>
    <h3>Textos</h3>

    <TransitionGroup name="textos">
        <ItemDeTexto
            v-for="(texto, indice) in itensOrdenados"
            :key="indice"
            :texto="(texto as TextoEditavel)"
            :ehPrimeiro="indice === 0"
            :ehUltimo="indice === itensOrdenados.length - 1"
            @editar="editar"
            @excluir="excluir"
            @descer="descer"
            @subir="subir"
        ></ItemDeTexto>
    </TransitionGroup>

    <AdicionarTexto
        :indice="itensOrdenados.length"
        @adicionarItem="adicionarItem"
    ></AdicionarTexto>
</template>

<style scoped>
.textos-move {
    transition: all 0.5s ease-in-out;
}
</style>
