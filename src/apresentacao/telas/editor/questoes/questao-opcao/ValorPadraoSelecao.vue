<script lang="ts">
import { defineComponent } from 'vue';
import { OpcaoEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/OpcaoEditavel';
import { ListaEditavel } from '@/dominio/editor/comum/ListaEditavel';
import { IdFormulario } from '@/dominio/comum/IdFormulario';

export default defineComponent({
    name: 'ValorPadraoSelecao',
    props: {
        listaOpcoes: {
            type: ListaEditavel,
            required: true,
        },
        selecionado: {
            type: IdFormulario,
            required: false,
            default: undefined,
        },
    },
    data() {
        return {
            estaLista: this.listaOpcoes as ListaEditavel<OpcaoEditavel>,
            esteSelecionado: this.selecionado?.toString() || null,
            erro: '',
        };
    },
    computed: {
        itensOrdenados(): OpcaoEditavel[] {
            const retorno = (this.listaOpcoes as ListaEditavel<OpcaoEditavel>)
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
    watch: {
        esteSelecionado(novaSelecao: string) {
            this.erro = '';
            if (!novaSelecao) {
                console.log('!novaSelecao');
                return this.$emit('selecionou', null);
            } else {
                const opcaoSelecionada = this.estaLista
                    .getItens()
                    .find(opcao => {
                        return (
                            opcao.getId().toString() === novaSelecao.toString()
                        );
                    });
                if (!opcaoSelecionada) {
                    this.erro = 'Erro ao selecionar o tipo de variável';
                    return this.$emit('selecionou', null);
                } else {
                    this.$emit('selecionou', opcaoSelecionada.getId());
                }
            }
        },
    },
    emits: ['selecionou'],
});
</script>

<template>
    <label for="valorPadrao">
        Valor Padrão
        <select
            id="valorPadrao"
            name="valorPadrao"
            v-model="esteSelecionado"
            required
        >
            <option :value="null" selected>Nenhum</option>
            <option
                v-for="opcao in itensOrdenados"
                :key="opcao.getId().toString()"
                :value="opcao.getId().toString()"
            >
                {{ opcao.getTitulo().toString() }}
            </option>
        </select>
    </label>

    <article class="erro" v-if="erro">
        {{ erro }}
    </article>
</template>

<style scoped>
.opcoes-move {
    transition: all 0.5s ease-in-out;
}

.lista-opcoes {
    margin-bottom: 40px;
}
</style>
