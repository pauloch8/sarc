<script lang="ts">
import { SelecaoEditavel } from '@/dominio/editor/questoes/questao-selecao/selecao/SelecaoEditavel';
import { defineComponent } from 'vue';
import SelecaoEdicao from './SelecaoEdicao.vue';

export default defineComponent({
    name: 'AdicionarSelecao',
    components: {
        SelecaoEdicao,
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
        adicionarItem(item: SelecaoEditavel) {
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
        <SelecaoEdicao
            :indice="indice"
            @criou="adicionarItem"
            @cancelou="cancelou"
        >
        </SelecaoEdicao>
    </div>
</template>
