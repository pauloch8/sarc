<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BotoesEdicao',
    emits: ['excluiu', 'desceu', 'subiu', 'editou'],
});
</script>

<template>
    <div>
        <span @click.prevent="$emit('editou')">
            <FontAwesomeIcon icon="fa-solid fa-edit" />
        </span>
        <span @click.prevent="$emit('excluiu')">
            <FontAwesomeIcon icon="fa-solid fa-trash" />
        </span>
        <span @click.prevent="$emit('desceu')">
            <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
        </span>
        <span @click.prevent="$emit('subiu')">
            <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
        </span>
    </div>
</template>

<style lang="scss" scoped>
div {
    float: right;
}

div:hover {
    cursor: pointer;
}

span {
    font-size: larger;
    padding: 20px 30px;
}

span:hover {
    border-radius: var(--border-radius);
    background: var(--card-background-color);
    box-shadow: var(--card-box-shadow);
}
</style>
