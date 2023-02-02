<script lang="ts">
import { IEscapador } from '@/dominio/comum/escapador/Escapador';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'EscapadoresDisponiveis',
    props: {
        escapadores: {
            type: Array,
            required: true,
        },
        escapadoresUsados: {
            type: Array,
            required: false,
        },
    },
});
</script>

<template>
    <article class="escapadoresDisponiveis">
        Escapadores disponíveis:
        <ul>
            <li
                :class="{ usado: escapadoresUsados?.includes(escapador) }"
                :aria-label="escapador.toString()"
                v-for="(escapador, indice) in escapadores as IEscapador[]"
                :key="indice"
            >
                {{ escapador.toString() }}
            </li>
        </ul>
    </article>
</template>

<style lang="scss" scoped>
article * {
    background-color: #89c4ff;
}
ul {
    margin: 0;
}
.usado {
    color: #004589;
    font-weight: bolder;
}
</style>
