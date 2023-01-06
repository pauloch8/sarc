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
        salvou() {
            this.emEdicao = false;
        },
        editar() {
            this.emEdicao = true;
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
            + Adicionar Questão
        </a>
    </div>
    <div v-if="emEdicao">
        <OpcaoEdicao :indice="indice" @salvou="salvou"> </OpcaoEdicao>
    </div>
</template>

<style>
footer {
    text-align: right;
}
</style>
