<script lang="ts">
import { defineComponent } from 'vue';
import ItemDeOpcao from './ItemDeOpcao.vue';
import AdicionarOpcao from './AdicionarOpcao.vue';
import { OpcaoEditavel } from '@/dominio/editor/OpcaoEditavel';
import { ListaEditavel } from '@/dominio/editor/ListaEditavel';

export default defineComponent({
    name: 'ListaOpcoes',
    components: {
        ItemDeOpcao,
        AdicionarOpcao,
    },
    props: {
        lista: {
            type: ListaEditavel,
            required: true,
        },
    },
    data() {
        return {
            estaLista: this.lista as ListaEditavel<OpcaoEditavel>,
        };
    },
    computed: {
        opcoesOrdenadas() {
            const retorno = (this.lista as ListaEditavel<OpcaoEditavel>)
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
        editarOpcao(opcao: OpcaoEditavel) {
            this.estaLista.editarItem(opcao);
        },
        excluirOpcao(opcao: OpcaoEditavel) {
            this.estaLista.excluirItem(opcao);
        },
        descerOpcao(opcao: OpcaoEditavel) {
            this.estaLista.descerItem(opcao);
        },
        subirOpcao(opcao: OpcaoEditavel) {
            this.estaLista.subirItem(opcao);
        },
    },
});
</script>

<template>
    <h2>Opções</h2>

    <TransitionGroup name="opcoes">
        <ItemDeOpcao
            v-for="(opcao, indice) in opcoesOrdenadas"
            :key="opcao.getId().toString()"
            :opcao="(opcao as OpcaoEditavel)"
            :ehPrimeiro="indice === 0"
            :ehUltimo="indice === opcoesOrdenadas.length - 1"
            @editar="editarOpcao"
            @excluiu="excluirOpcao"
            @desceu="descerOpcao"
            @subiu="subirOpcao"
        ></ItemDeOpcao>
    </TransitionGroup>

    <AdicionarOpcao v-if="!opcoesOrdenadas.length" :indice="0"></AdicionarOpcao>
</template>

<style scoped>
.opcoes-move {
    transition: all 0.5s ease-in-out;
}
</style>
