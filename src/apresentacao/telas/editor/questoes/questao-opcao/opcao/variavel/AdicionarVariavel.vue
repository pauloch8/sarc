<script lang="ts">
import { VariavelEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/VariavelEditavel';
import { defineComponent } from 'vue';
import VariavelEdicao from './VariavelEdicao.vue';

export default defineComponent({
    name: 'AdicionarVariavel',
    components: {
        VariavelEdicao,
    },
    props: {
        indice: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            emEdicao: false,
        };
    },
    methods: {
        editar() {
            this.emEdicao = true;
        },
        adicionarItem(variavel: VariavelEditavel) {
            this.emEdicao = false;
            this.$emit('adicionarItem', variavel);
        },
        cancelou() {
            this.emEdicao = false;
        },
    },
    emits: ['adicionarItem'],
});
</script>

<template>
    <div v-if="!emEdicao">
        <a
            href="#"
            role="button"
            class="outline adicionar"
            @click.prevent="editar"
        >
            + Adicionar Variavel
        </a>
    </div>
    <div v-if="emEdicao">
        <VariavelEdicao
            :indice="indice"
            @criou="adicionarItem"
            @cancelou="cancelou"
        >
        </VariavelEdicao>
    </div>
</template>

<style>
footer {
    text-align: right;
}
</style>
