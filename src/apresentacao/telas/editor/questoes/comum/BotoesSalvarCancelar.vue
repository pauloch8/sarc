<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BotoesSalvarCancelar',
    emits: ['cancelou', 'salvou'],
});
</script>

<template>
    <a
        href="#"
        role="button"
        class="secondary botaoCancelar"
        @click.prevent="$emit('cancelou')"
        >Cancelar</a
    >
    <a
        href="#"
        role="button"
        class="botaoSalvar"
        @click.prevent="$emit('salvou')"
        >Salvar</a
    >
</template>

<style lang="scss" scoped>
a {
    margin-left: 10px;
}
</style>
