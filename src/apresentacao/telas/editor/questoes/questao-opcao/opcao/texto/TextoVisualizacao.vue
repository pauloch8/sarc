<script lang="ts">
import { defineComponent } from 'vue';
import BotoesEdicao from '../../../../comum/BotoesEdicao.vue';
import { TextoEditavel } from '@/dominio/editor/TextoEditavel';

export default defineComponent({
    name: 'TextoVisualizacao',
    components: { BotoesEdicao },
    props: {
        texto: { type: TextoEditavel, required: true },
        ehPrimeiro: { type: Boolean, required: true },
        ehUltimo: { type: Boolean, required: true },
    },
    computed: {
        titulo() {
            let titulo = this.texto.toString();
            if (titulo.length > 13) {
                titulo = titulo.substring(0, 10) + '...';
            }
            return titulo;
        },
    },
    methods: {
        editar() {
            this.$emit('editar', this.texto);
        },
        excluir() {
            this.$emit('excluir', this.texto);
        },
        descer() {
            this.$emit('descer', this.texto);
        },
        subir() {
            this.$emit('subir', this.texto);
        },
    },
    emits: ['excluir', 'descer', 'subir', 'editar'],
});
</script>

<template>
    <label>
        <input type="radio" disabled />
        {{ titulo }}
        <BotoesEdicao
            :ehPrimeiro="ehPrimeiro"
            :ehUltimo="ehUltimo"
            @editar="editar"
            @excluir="excluir"
            @descer="descer"
            @subir="subir"
        ></BotoesEdicao>
    </label>
</template>

<style lang="scss" scoped>
label {
    padding: 20px 40px;
}

label:hover {
    border-radius: var(--border-radius);
    background: var(--card-background-color);
    box-shadow: var(--card-box-shadow);
}

input[type='radio'][disabled] {
    cursor: not-allowed;
    border-color: #000;
    background-color: #fff;
}
</style>
