<script lang="ts">
import { defineComponent, inject } from 'vue';
import TituloInput from '../../comum/TituloInput.vue';
import IdFormularioInput from '../../comum/IdFormularioInput.vue';
import SubtituloInput from '../../comum/SubtituloInput.vue';
import OpcaoComponent from '../opcao/OpcaoComponent.vue';
import BotoesSalvarCancelar from '../comum/BotoesSalvarCancelar.vue';
import { QuestaoEditavel } from '@/dominio/editor/QuestaoEditavel';
import { Titulo } from '@/dominio/editor/Titulo';
import { Subtitulo } from '@/dominio/editor/Subtitulo';
import { IdFormulario } from '@/dominio/editor/IdFormulario';
import { IQuestaoEditavelFactory } from '@/dominio/editor/QuestaoEditavelFactory';
import { ListaEditavel } from '@/dominio/editor/ListaEditavel';
import { Opcao } from '@/dominio/editor/Opcao';

export default defineComponent({
    name: 'QuestaoEdicao',
    components: {
        IdFormularioInput,
        TituloInput,
        SubtituloInput,
        // OpcaoComponent,
        BotoesSalvarCancelar,
    },
    setup() {
        const factory = inject<IQuestaoEditavelFactory>(
            'questaoEditavelFactory',
        );
        if (!factory) {
            throw new Error(
                'Não injetada a dependência questaoEditavelFactory',
            );
        }
        return {
            factory,
        };
    },
    props: {
        questao: { type: QuestaoEditavel, required: false },
        indice: { type: Number, required: false },
    },
    data() {
        const idFormulario = this.questao?.getId();
        const titulo = this.questao?.getTitulo();
        const subtitulo = this.questao?.getSubTitulo();
        const opcoes = this.questao?.getOpcoes();
        const erro = '';
        return {
            idFormulario,
            titulo,
            subtitulo,
            opcoes,
            erro,
        };
    },
    methods: {
        gerouId(id: IdFormulario) {
            this.idFormulario = id;
        },
        digitouTitulo(titulo: Titulo) {
            this.titulo = titulo;
        },
        digitouSubtitulo(subtitulo: Subtitulo) {
            this.subtitulo = subtitulo;
        },
        cancelar() {
            alert('cancelar');
        },
        salvar() {
            try {
                if (!this.questao) {
                    const questao = this.factory.criar(
                        this.idFormulario as IdFormulario,
                        this.titulo as Titulo,
                        this.indice as number,
                        this.subtitulo as Subtitulo,
                    );
                    this.$emit('criou', questao);
                } else {
                    this.questao.setId(this.idFormulario as IdFormulario);
                    this.questao.setTitulo(this.titulo as Titulo);
                    this.questao.setSubtitulo(this.subtitulo as Subtitulo);
                    this.questao.setIndice(this.indice as number);
                    this.questao.setOpcoes(this.opcoes as ListaEditavel<Opcao>);
                    this.$emit('atualizou', this.questao);
                }
            } catch (e) {
                if (e instanceof Error) {
                    this.erro = e.message;
                } else {
                    this.erro = 'Ocorreu um erro desconhecido';
                }
            }
        },
    },
    emits: ['cancelou', 'criou', 'atualizou'],
});
</script>

<template>
    <article class="emEdicao">
        <header>Edição de Questão</header>
        <IdFormularioInput
            :titulo="(titulo as Titulo)"
            @gerouId="gerouId"
        ></IdFormularioInput>

        <TituloInput
            :titulo="(titulo as Titulo)"
            @digitou="digitouTitulo"
        ></TituloInput>

        <SubtituloInput
            :subtitulo="(subtitulo as Subtitulo)"
            @digitou="digitouSubtitulo"
        ></SubtituloInput>

        <!-- <div class="opcoes">
            <OpcaoComponent
                v-for="opcao in questao?.getOpcoes().getItens()"
                :key="opcao.getId().toString()"
                :opcao="opcao"
            ></OpcaoComponent>
        </div> -->

        <a href="#" role="button" class="outline adicionar"
            >+ Adicionar Opção</a
        >

        <article class="erro" v-if="erro">{{ erro }}</article>

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

.erro {
    background-color: #e32b2b;
    color: white;
}
</style>
