<script lang="ts">
import { defineComponent } from 'vue';
import TextoVisualizacao from './TextoVisualizacao.vue';
import TextoEdicao from './TextoEdicao.vue';
import { TextoEditavel } from '@/dominio/editor/TextoEditavel';

export default defineComponent({
    name: 'ItemDeTexto',
    components: {
        TextoVisualizacao,
        TextoEdicao,
    },
    props: {
        texto: { type: TextoEditavel, required: true },
        ehPrimeiro: { type: Boolean, required: true },
        ehUltimo: { type: Boolean, required: true },
    },
    methods: {
        editar(texto: TextoEditavel) {
            this.$emit('editar', texto);
        },
        excluir(texto: TextoEditavel) {
            this.$emit('excluir', texto);
        },
        descer(texto: TextoEditavel) {
            this.$emit('descer', texto);
        },
        subir(texto: TextoEditavel) {
            this.$emit('subir', texto);
        },
        selecionar(texto: TextoEditavel) {
            this.$emit('selecionar', texto);
        },
    },
    emits: ['editar', 'excluir', 'descer', 'subir', 'selecionar'],
});
</script>

<template>
    <div>
        <TextoVisualizacao
            v-if="!texto.getEmEdicao()"
            :texto="texto"
            :ehPrimeiro="ehPrimeiro"
            :ehUltimo="ehUltimo"
            @editar="editar"
            @excluir="excluir"
            @descer="descer"
            @subir="subir"
            @selecionar="selecionar"
        ></TextoVisualizacao>

        <TextoEdicao
            v-if="texto.getEmEdicao()"
            :texto="(texto as TextoEditavel)"
        ></TextoEdicao>
    </div>
</template>

<style>
footer {
    text-align: right;
}
</style>
