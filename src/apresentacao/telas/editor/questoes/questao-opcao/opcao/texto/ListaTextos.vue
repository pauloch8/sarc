<script lang="ts">
import { ListaEditavel } from '@/dominio/editor/questoes/ListaEditavel';
import { TextoEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/texto/TextoEditavel';
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
        editar(texto: TextoEditavel) {
            this.estaLista.editarItem(texto);
        },
        excluir(texto: TextoEditavel) {
            this.estaLista.excluirItem(texto);
        },
        descer(texto: TextoEditavel) {
            this.estaLista.descerItem(texto);
        },
        subir(texto: TextoEditavel) {
            this.estaLista.subirItem(texto);
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

    <AdicionarTexto :indice="itensOrdenados.length"></AdicionarTexto>
</template>

<style scoped>
.textos-move {
    transition: all 0.5s ease-in-out;
}
</style>
