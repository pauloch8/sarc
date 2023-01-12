<script lang="ts">
import { defineComponent } from 'vue';
import VariavelVisualizacao from './VariavelVisualizacao.vue';
import VariavelEdicao from './VariavelEdicao.vue';
import { VariavelEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/VariavelEditavel';

export default defineComponent({
    name: 'ItemDeVariavel',
    components: {
        VariavelVisualizacao,
        VariavelEdicao,
    },
    props: {
        variavel: { type: VariavelEditavel, required: true },
        ehPrimeiro: { type: Boolean, required: true },
        ehUltimo: { type: Boolean, required: true },
    },
    methods: {
        editar(variavel: VariavelEditavel) {
            this.$emit('editar', variavel);
        },
        excluir(variavel: VariavelEditavel) {
            this.$emit('excluir', variavel);
        },
        descer(variavel: VariavelEditavel) {
            this.$emit('descer', variavel);
        },
        subir(variavel: VariavelEditavel) {
            this.$emit('subir', variavel);
        },
    },
    emits: ['editar', 'excluir', 'descer', 'subir'],
});
</script>

<template>
    <div>
        <VariavelVisualizacao
            v-if="!variavel.getEmEdicao()"
            :variavel="variavel"
            :ehPrimeiro="ehPrimeiro"
            :ehUltimo="ehUltimo"
            @editar="editar"
            @excluir="excluir"
            @descer="descer"
            @subir="subir"
        ></VariavelVisualizacao>

        <VariavelEdicao
            v-if="variavel.getEmEdicao()"
            :variavel="(variavel as VariavelEditavel)"
        ></VariavelEdicao>
    </div>
</template>

<style>
footer {
    text-align: right;
}
</style>
