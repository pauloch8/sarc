<script lang="ts">
import { defineComponent } from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import BotoesSalvarCancelar from '../comum/BotoesSalvarCancelar.vue';
import { Variavel } from '@/dominio/formulario/questoes/Variavel';

export default defineComponent({
    name: 'VariavelEdicao',
    components: {
        BotoesSalvarCancelar,
    },
    props: {
        variavel: {
            type: Variavel,
            required: true,
        },
    },
    data() {
        return {
            classicEditor: ClassicEditor,
            editorHtml: '',
        };
    },
    emits: ['cancelou', 'salvou'],
});
</script>

<template>
    <article class="emEdicao">
        <header>Edição de Variável</header>

        <label for="categoria">
            Tipo
            <input type="text" id="categoria" name="categoria" value="padrao" />
        </label>
        <label for="texto">
            Texto
            <ckeditor
                :editor="classicEditor"
                v-model="editorHtml"
                :config="{}"
            ></ckeditor>
        </label>

        <footer>
            <BotoesSalvarCancelar
                @cancelou="$emit('cancelou')"
                @salvou="$emit('salvou')"
            ></BotoesSalvarCancelar>
        </footer>
    </article>
</template>

<style scoped>
label input[type='text'] {
    display: inline;
    width: 95%;
}
</style>
