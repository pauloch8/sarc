<script lang="ts">
import { ListaEditavel } from '@/dominio/editor/ListaEditavel';
import { TextoEditavel } from '@/dominio/editor/TextoEditavel';
import { defineComponent } from 'vue';
import ItemDeTexto from './ItemDeTexto.vue';
import AdicionarTextos from './AdicionarTextos.vue';

export default defineComponent({
    name: 'ListaTextos',
    components: {
        ItemDeTexto,
        AdicionarTextos,
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
        listaOrdenada() {
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
    <h2>Questões</h2>

    <TransitionGroup name="questoes">
        <ItemDeTexto
            v-for="(texto, indice) in listaOrdenada"
            :key="indice"
            :texto="(texto as TextoEditavel)"
            :ehPrimeiro="indice === 0"
            :ehUltimo="indice === listaOrdenada.length - 1"
            @editar="editar"
            @excluiu="excluir"
            @desceu="descer"
            @subiu="subir"
        ></ItemDeTexto>
    </TransitionGroup>

    <AdicionarTextos v-if="!listaOrdenada.length" :indice="0"></AdicionarTextos>
</template>

<style scoped>
.questoes-move {
    transition: all 0.5s ease-in-out;
}
</style>
