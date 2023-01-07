<script lang="ts">
import { defineComponent } from 'vue';
import TextoEdicao from './TextoEdicao.vue';

export default defineComponent({
    name: 'AdicionarTexto',
    components: {
        TextoEdicao,
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
            + Adicionar Texto
        </a>
    </div>
    <div v-if="emEdicao">
        <TextoEdicao :indice="indice" @salvou="salvou" @cancelou="cancelou">
        </TextoEdicao>
    </div>
</template>

<style>
footer {
    text-align: right;
}
</style>
