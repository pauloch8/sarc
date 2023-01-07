<script lang="ts">
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
        salvou() {
            this.emEdicao = false;
        },
        cancelou() {
            this.emEdicao = false;
        },
    },
    emits: ['salvou'],
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
        <OpcaoEdicao :indice="indice" @salvou="salvou" @cancelou="cancelou">
        </OpcaoEdicao>
    </div>
</template>

<style>
footer {
    text-align: right;
}
</style>
