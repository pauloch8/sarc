<script lang="ts">
import { ListaEditavel } from '@/dominio/editor/comum/ListaEditavel';
import { VariavelEditavel } from '@/dominio/editor/questoes/comum/variavel/VariavelEditavel';
import { defineComponent } from 'vue';
import ItemDeVariavel from './ItemDeVariavel.vue';
import AdicionarVariavel from './AdicionarVariavel.vue';

export default defineComponent({
    name: 'ListaVariaveis',
    components: {
        ItemDeVariavel,
        AdicionarVariavel,
    },
    props: {
        lista: {
            type: ListaEditavel,
            required: true,
        },
    },
    data() {
        return {
            estaLista: this.lista as ListaEditavel<VariavelEditavel>,
        };
    },
    computed: {
        itensOrdenados() {
            const retorno = (this.lista as ListaEditavel<VariavelEditavel>)
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
        editar(item: VariavelEditavel) {
            this.estaLista.editarItem(item);
        },
        adicionarItem(item: VariavelEditavel) {
            this.estaLista.adicionarItem(item);
        },
        excluir(item: VariavelEditavel) {
            this.estaLista.excluirItem(item);
        },
        descer(item: VariavelEditavel) {
            this.estaLista.descerItem(item);
        },
        subir(item: VariavelEditavel) {
            this.estaLista.subirItem(item);
        },
    },
});
</script>

<template>
    <h3>Variaveis</h3>

    <TransitionGroup name="variavels">
        <ItemDeVariavel
            v-for="(variavel, indice) in itensOrdenados"
            :key="indice"
            :variavel="(variavel as VariavelEditavel)"
            :ehPrimeiro="indice === 0"
            :ehUltimo="indice === itensOrdenados.length - 1"
            @editar="editar"
            @excluir="excluir"
            @descer="descer"
            @subir="subir"
        ></ItemDeVariavel>
    </TransitionGroup>

    <AdicionarVariavel
        :indice="itensOrdenados.length"
        @adicionarItem="adicionarItem"
    ></AdicionarVariavel>
</template>

<style scoped>
.variavels-move {
    transition: all 0.5s ease-in-out;
}
</style>
