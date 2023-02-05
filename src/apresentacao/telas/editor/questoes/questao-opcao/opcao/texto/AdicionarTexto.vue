<script lang="ts">
import { TextoEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/texto/TextoEditavel';
import { defineComponent } from 'vue';
import TextoEdicao from './TextoEdicao.vue';

export default defineComponent({
    name: 'AdicionarTexto',
    components: {
        TextoEdicao,
    },
    props: {
        indice: { type: Number, required: true },
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
        adicionarItem(item: TextoEditavel) {
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
            + Adicionar Texto
        </a>
    </div>
    <div v-if="emEdicao">
        <TextoEdicao
            :indice="indice"
            @criou="adicionarItem"
            @cancelou="cancelou"
        >
        </TextoEdicao>
    </div>
</template>

<style>
footer {
    text-align: right;
}
</style>
