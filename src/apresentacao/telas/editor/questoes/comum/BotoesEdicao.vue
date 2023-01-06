<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BotoesEdicao',
    props: {
        ehPrimeiro: {
            type: Boolean,
            required: true,
        },
        ehUltimo: {
            type: Boolean,
            required: true,
        },
    },
    computed: {
        classesSubir() {
            return {
                botao: true,
                habilitado: !this.ehUltimo,
                desabilitado: this.ehUltimo,
            };
        },
        classesDescer() {
            return {
                botao: true,
                habilitado: !this.ehPrimeiro,
                desabilitado: this.ehPrimeiro,
            };
        },
    },
    methods: {
        editar() {
            this.$emit('editou');
        },
        excluir() {
            this.$emit('excluiu');
        },
        descer() {
            if (!this.ehPrimeiro) {
                this.$emit('desceu');
            }
        },
        subir() {
            if (!this.ehUltimo) {
                this.$emit('subiu');
            }
        },
    },
    emits: ['excluiu', 'desceu', 'subiu', 'editou'],
});
</script>

<template>
    <div>
        <span class="botao habilitado" @click.prevent="editar">
            <FontAwesomeIcon icon="fa-solid fa-edit" />
        </span>
        <span class="botao habilitado" @click.prevent="excluir">
            <FontAwesomeIcon icon="fa-solid fa-trash" />
        </span>
        <span :class="classesDescer" @click.prevent="descer">
            <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
        </span>
        <span :class="classesSubir" @click.prevent="subir">
            <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
        </span>
    </div>
</template>

<style lang="scss" scoped>
div {
    float: right;
}

span {
    font-size: larger;
    padding: 20px 30px;
}

.botao.habilitado:hover {
    border-radius: var(--border-radius);
    background: var(--card-background-color);
    box-shadow: var(--card-box-shadow);
    cursor: pointer;
}
.botao.desabilitado {
    color: #ccc;
}
</style>
