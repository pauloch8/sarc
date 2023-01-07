<script lang="ts">
import { defineComponent, inject } from 'vue';
import BotoesSalvarCancelar from '../comum/BotoesSalvarCancelar.vue';
import { TextoEditavel } from '@/dominio/editor/TextoEditavel';
import { ITextoEditavelFactory } from '@/dominio/editor/TextoEditavelFactory';

export default defineComponent({
    name: 'TextoEdicao',
    setup() {
        const factory = inject<ITextoEditavelFactory>('textoEditavelFactory');
        if (!factory) {
            throw new Error('Não injetada a dependência textoEditavelFactory');
        }
        return {
            factory,
        };
    },
    props: {
        texto: { type: TextoEditavel, required: false },
        indice: { type: Number, required: false },
    },
    data() {
        const categoria = this.texto?.getCategoria();
        const textoString = this.texto?.getTexto();
        const erro = '';
        const inconsistencias: string[] = [];
        return {
            categoria,
            textoString,
            erro,
            inconsistencias,
        };
    },
    methods: {
        cancelar() {
            this.texto?.encerrarEdicao();
            this.$emit('cancelou');
        },
        salvar() {
            'salvar';
        },
    },
    emits: ['cancelou', 'criou', 'atualizou'],
});
</script>

<template>
    <article class="emEdicao">
        <header>Edição de Texto</header>

        <article class="erro" v-if="erro">
            {{ erro }}
            <div v-if="inconsistencias.length">
                Inconsistências:
                <ul>
                    <li v-for="(item, index) in inconsistencias" :key="index">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </article>

        <footer>
            <BotoesSalvarCancelar
                @cancelou="cancelar"
                @salvou="salvar"
            ></BotoesSalvarCancelar>
        </footer>
    </article>
</template>

<style lang="scss" scoped>
input,
textarea {
    background-color: white;
}

label input[type='text'] {
    display: inline;
    width: 95%;
}

input[type='radio'][disabled] {
    cursor: not-allowed;
    border-color: #000;
    background-color: #fff;
}

.opcoes {
    margin-bottom: 30px;
}
</style>
