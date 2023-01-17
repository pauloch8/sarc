<!-- <script lang="ts">
import { defineComponent } from 'vue';
import BotoesEdicao from '../../../../comum/BotoesEdicao.vue';
import { ModeloEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/modelo/ModeloEditavel';

export default defineComponent({
    name: 'ModeloVisualizacao',
    components: { BotoesEdicao },
    props: {
        modelo: { type: ModeloEditavel, required: true },
        ehPrimeiro: { type: Boolean, required: true },
        ehUltimo: { type: Boolean, required: true },
    },
    computed: {
        titulo() {
            let titulo = this.modelo.toString();
            if (titulo.length > 28) {
                titulo = titulo.substring(0, 25) + '...';
            }
            return titulo;
        },
    },
    methods: {
        editar() {
            this.$emit('editar', this.modelo);
        },
        excluir() {
            this.$emit('excluir', this.modelo);
        },
        descer() {
            this.$emit('descer', this.modelo);
        },
        subir() {
            this.$emit('subir', this.modelo);
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
</style> -->
