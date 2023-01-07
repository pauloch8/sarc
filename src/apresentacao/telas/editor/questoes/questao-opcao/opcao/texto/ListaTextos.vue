<script lang="ts">
import { ListaEditavel } from '@/dominio/editor/ListaEditavel';
import { TextoEditavel } from '@/dominio/editor/TextoEditavel';
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
        editarTexto(texto: TextoEditavel) {
            this.estaLista.editarItem(texto);
        },
        excluirTexto(texto: TextoEditavel) {
            this.estaLista.excluirItem(texto);
        },
        descerTexto(texto: TextoEditavel) {
            this.estaLista.descerItem(texto);
        },
        subirTexto(texto: TextoEditavel) {
            this.estaLista.subirItem(texto);
        },
    },
});
</script>

<template>
    <h3>Textos</h3>

    <TransitionGroup name="questoes">
        <ItemDeTexto
            v-for="(texto, indice) in itensOrdenados"
            :key="indice"
            :texto="(texto as TextoEditavel)"
            :ehPrimeiro="indice === 0"
            :ehUltimo="indice === itensOrdenados.length - 1"
            @editar="editarTexto"
            @excluir="excluirTexto"
            @descer="descerTexto"
            @subir="subirTexto"
        ></ItemDeTexto>
    </TransitionGroup>

    <AdicionarTexto :indice="itensOrdenados.length"></AdicionarTexto>
</template>

<style scoped>
.questoes-move {
    transition: all 0.5s ease-in-out;
}
</style>
