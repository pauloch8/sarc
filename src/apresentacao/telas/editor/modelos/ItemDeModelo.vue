<script lang="ts">
import { defineComponent } from 'vue';
import ModeloVisualizacao from './ModeloVisualizacao.vue';
import ModeloEdicao from './ModeloEdicao.vue';
import { ModeloEditavel } from '@/dominio/editor/modelo/ModeloEditavel';

export default defineComponent({
    name: 'ItemDeModelo',
    components: {
        ModeloVisualizacao,
        ModeloEdicao,
    },
    props: {
        modelo: { type: ModeloEditavel, required: true },
        ehPrimeiro: { type: Boolean, required: true },
        ehUltimo: { type: Boolean, required: true },
    },
    methods: {
        editar(modelo: ModeloEditavel) {
            this.$emit('editar', modelo);
        },
        excluir(modelo: ModeloEditavel) {
            this.$emit('excluir', modelo);
        },
        descer(modelo: ModeloEditavel) {
            this.$emit('descer', modelo);
        },
        subir(modelo: ModeloEditavel) {
            this.$emit('subir', modelo);
        },
        selecionar(modelo: ModeloEditavel) {
            this.$emit('selecionar', modelo);
        },
    },
    emits: ['editar', 'excluir', 'descer', 'subir', 'selecionar'],
});
</script>

<template>
    <div>
        <ModeloVisualizacao
            v-if="!modelo.getEmEdicao()"
            :modelo="modelo"
            :ehPrimeiro="ehPrimeiro"
            :ehUltimo="ehUltimo"
            @editar="editar"
            @excluir="excluir"
            @descer="descer"
            @subir="subir"
            @selecionar="selecionar"
        >
        </ModeloVisualizacao>

        <ModeloEdicao
            v-if="modelo.getEmEdicao()"
            :modelo="(modelo as ModeloEditavel)"
        ></ModeloEdicao>
    </div>
</template>

<style lang="scss" scoped>
footer {
    text-align: right;
}
</style>
