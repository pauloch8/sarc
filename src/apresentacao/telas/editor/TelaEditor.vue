<script lang="ts">
import { defineComponent } from 'vue';
import FormularioEditor from './FormularioEditor.vue';

export default defineComponent({
    name: 'TelaEditor',
    components: {
        FormularioEditor,
    },
});
</script>

<template>
    <FormularioEditor></FormularioEditor>
</template>

<style scoped>
.questoes {
    padding-bottom: 60px;
}
</style>

<style>
div {
    user-select: none;
}

.emEdicao {
    border-top-color: #0f3d5d;
    border-top-width: 8px;
    border-top-style: solid;
}

.adicionar {
    margin-left: 40px;
}
</style>
