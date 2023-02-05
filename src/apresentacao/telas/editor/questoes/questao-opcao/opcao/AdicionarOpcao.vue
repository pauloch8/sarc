<script lang="ts">
import { OpcaoEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/OpcaoEditavel';
import { defineComponent } from 'vue';
import OpcaoEdicao from './OpcaoEdicao.vue';

export default defineComponent({
    name: 'AdicionarOpcao',
    components: {
        OpcaoEdicao,
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
        adicionarItem(item: OpcaoEditavel) {
            this.emEdicao = false;
            this.$emit('adicionarItem', item);
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
            + Adicionar Opção
        </a>
    </div>
    <div v-if="emEdicao">
        <OpcaoEdicao
            :indice="indice"
            @criou="adicionarItem"
            @cancelou="cancelou"
        >
        </OpcaoEdicao>
    </div>
</template>

<style>
footer {
    text-align: right;
}
</style>
