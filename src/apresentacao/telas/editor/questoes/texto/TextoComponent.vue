<script lang="ts">
import { Texto } from '@/dominio/processamento/processador/texto/Texto';
import { defineComponent } from 'vue';
import TextoVisualizacao from './TextoVisualizacao.vue';
import TextoEdicao from './TextoEdicao.vue';

export default defineComponent({
    name: 'TextoComponent',
    components: {
        TextoVisualizacao,
        TextoEdicao,
    },
    props: {
        texto: {
            type: Texto,
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
    },
});
</script>

<template>
    <TextoVisualizacao
        v-if="!emEdicao"
        :texto="texto"
        @editou="emEdicao = true"
    ></TextoVisualizacao>
    <TextoEdicao
        v-if="emEdicao"
        :texto="texto"
        @cancelou="emEdicao = false"
        @salvou="emEdicao = false"
    ></TextoEdicao>
</template>
