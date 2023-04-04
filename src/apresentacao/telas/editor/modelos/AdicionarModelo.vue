<script lang="ts">
import { ModeloEditavel } from '@/dominio/editor/modelo/ModeloEditavel';
import { defineComponent } from 'vue';
import ModeloEdicao from './ModeloEdicao.vue';

export default defineComponent({
    name: 'AdicionarModelo',
    components: {
        ModeloEdicao,
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
        adicionarItem(modelo: ModeloEditavel) {
            this.emEdicao = false;
            this.$emit('adicionarItem', modelo);
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
            + Adicionar Modelo
        </a>
    </div>
    <div v-if="emEdicao">
        <ModeloEdicao
            :indice="indice"
            @criou="adicionarItem"
            @cancelou="cancelou"
        >
        </ModeloEdicao>
    </div>
</template>

<style lang="scss" scoped>
footer {
    text-align: right;
}
</style>
