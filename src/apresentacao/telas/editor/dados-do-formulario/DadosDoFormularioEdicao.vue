<script lang="ts">
import { IdFormulario } from '@/dominio/editor/IdFormulario';
import { Subtitulo } from '@/dominio/editor/Subtitulo';
import { Titulo } from '@/dominio/editor/Titulo';
import { defineComponent } from 'vue';
import IdFormularioInput from '../comum/IdFormularioInput.vue';
import TituloInput from '../comum/TituloInput.vue';
import SubtituloInput from '../comum/SubtituloInput.vue';

export default defineComponent({
    name: 'DadosDoFormularioEdicao',
    components: { IdFormularioInput, TituloInput, SubtituloInput },
    props: {
        titulo: {
            type: Titulo,
            required: true,
        },
        subtitulo: {
            type: Subtitulo,
            required: true,
        },
    },
    methods: {
        gerouId(id?: IdFormulario) {
            this.$emit('gerouId', id);
        },
        digitouTitulo(titulo?: Titulo) {
            this.$emit('digitouTitulo', titulo);
        },
        digitouSubtitulo(subtitulo?: Subtitulo) {
            this.$emit('digitouSubtitulo', subtitulo);
        },
    },
    emits: ['gerouId', 'digitouTitulo', 'digitouSubtitulo'],
});
</script>

<template>
    <article>
        <header>
            <h2>Dados do formulário</h2>
        </header>

        <IdFormularioInput
            :titulo="titulo"
            @gerouId="gerouId"
        ></IdFormularioInput>

        <TituloInput :titulo="titulo" @digitou="digitouTitulo"></TituloInput>

        <SubtituloInput
            :subtitulo="subtitulo"
            @digitou="digitouSubtitulo"
        ></SubtituloInput>
    </article>
</template>
