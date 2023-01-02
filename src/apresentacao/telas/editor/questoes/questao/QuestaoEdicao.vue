<script lang="ts">
import { defineComponent } from 'vue';
import TituloInput from '../../comum/TituloInput.vue';
import IdFormularioInput from '../../comum/IdFormularioInput.vue';
import SubtituloInput from '../../comum/SubtituloInput.vue';
import OpcaoComponent from '../opcao/OpcaoComponent.vue';
import BotoesSalvarCancelar from '../comum/BotoesSalvarCancelar.vue';
import { QuestaoEditavel } from '@/dominio/editor/QuestaoEditavel';
import { Titulo } from '@/dominio/editor/Titulo';
import { Subtitulo } from '@/dominio/editor/Subtitulo';

export default defineComponent({
    name: 'QuestaoEdicao',
    components: {
        TituloInput,
        IdFormularioInput,
        SubtituloInput,
        OpcaoComponent,
        BotoesSalvarCancelar,
    },
    props: {
        questao: { type: QuestaoEditavel, required: false },
    },
    data() {
        const titulo = this.questao?.getTitulo() || new Titulo('');
        const subtitulo = this.questao?.getSubTitulo() || new Subtitulo('');
        return {
            titulo,
            subtitulo,
        };
    },
    emits: ['cancelou', 'salvou'],
});
</script>

<template>
    <article class="emEdicao">
        <header>Edição de Questão</header>
        <IdFormularioInput :titulo="(titulo as Titulo)"></IdFormularioInput>

        <TituloInput :titulo="(titulo as Titulo)"></TituloInput>

        <SubtituloInput :subtitulo="(subtitulo as Subtitulo)"></SubtituloInput>

        <div class="opcoes">
            <OpcaoComponent
                v-for="opcao in questao?.getOpcoes().getItens()"
                :key="opcao.getId().toString()"
                :opcao="opcao"
            ></OpcaoComponent>
        </div>

        <a href="#" role="button" class="outline adicionar"
            >+ Adicionar Opção</a
        >

        <footer>
            <BotoesSalvarCancelar
                @cancelou="$emit('cancelou')"
                @salvou="$emit('salvou')"
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
