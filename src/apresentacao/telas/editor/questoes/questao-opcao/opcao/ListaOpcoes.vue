<script lang="ts">
import { defineComponent } from 'vue';
import ItemDeOpcao from './ItemDeOpcao.vue';
import AdicionarOpcao from './AdicionarOpcao.vue';
import { OpcaoEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/OpcaoEditavel';
import { ListaEditavel } from '@/dominio/editor/questoes/ListaEditavel';

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
        itensOrdenados(): OpcaoEditavel[] {
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
        editar(item: OpcaoEditavel) {
            this.estaLista.editarItem(item);
        },
        excluir(item: OpcaoEditavel) {
            this.estaLista.excluirItem(item);
        },
        descer(item: OpcaoEditavel) {
            this.estaLista.descerItem(item);
        },
        subir(item: OpcaoEditavel) {
            this.estaLista.subirItem(item);
        },
    },
});
</script>

<template>
    <h3>Opções</h3>

    <div class="lista-opcoes">
        <TransitionGroup name="opcoes">
            <ItemDeOpcao
                v-for="(opcao, indice) in itensOrdenados"
                :key="opcao.getId().toString()"
                :opcao="(opcao as OpcaoEditavel)"
                :ehPrimeiro="indice === 0"
                :ehUltimo="indice === itensOrdenados.length - 1"
                @editar="editar"
                @excluir="excluir"
                @descer="descer"
                @subir="subir"
            ></ItemDeOpcao>
        </TransitionGroup>
    </div>

    <AdicionarOpcao :indice="itensOrdenados.length"></AdicionarOpcao>
</template>

<style scoped>
.opcoes-move {
    transition: all 0.5s ease-in-out;
}

.lista-opcoes {
    margin-bottom: 40px;
}
</style>
