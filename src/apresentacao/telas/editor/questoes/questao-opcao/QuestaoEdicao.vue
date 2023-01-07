<script lang="ts">
import { defineComponent, inject } from 'vue';
import TituloInput from '../../comum/TituloInput.vue';
import IdFormularioInput from '../../comum/IdFormularioInput.vue';
import SubtituloInput from '../../comum/SubtituloInput.vue';
import ListaOpcoes from './opcao/ListaOpcoes.vue';
import BotoesSalvarCancelar from '../../comum/BotoesSalvarCancelar.vue';
import {
    QuestaoEditavel,
    ErroQuestaoInvalida,
    ErroNaEdicaoDaQuestao,
} from '@/dominio/editor/QuestaoEditavel';
import { Titulo } from '@/dominio/editor/Titulo';
import { Subtitulo } from '@/dominio/editor/Subtitulo';
import { IdFormulario } from '@/dominio/editor/IdFormulario';
import { IQuestaoEditavelFactory } from '@/dominio/editor/QuestaoEditavelFactory';
import { ListaEditavel } from '@/dominio/editor/ListaEditavel';
import { OpcaoEditavel } from '@/dominio/editor/OpcaoEditavel';
import { TextoEditavel } from '@/dominio/editor/TextoEditavel';

export default defineComponent({
    name: 'QuestaoEdicao',
    components: {
        IdFormularioInput,
        TituloInput,
        SubtituloInput,
        ListaOpcoes,
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
        const opcoes =
            this.questao?.getOpcoes() || new ListaEditavel<OpcaoEditavel>();
        const erro = '';
        const inconsistencias: string[] = [];
        return {
            idFormulario,
            titulo,
            subtitulo,
            opcoes,
            erro,
            inconsistencias,
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
            this.questao?.encerrarEdicao();
            this.$emit('cancelou');
        },
        salvar() {
            this.erro = '';
            this.inconsistencias = [];
            if (!this.questao) {
                try {
                    const questao = this.factory.criar(
                        this.idFormulario as IdFormulario,
                        this.titulo as Titulo,
                        this.indice as number,
                        this.opcoes as ListaEditavel<OpcaoEditavel>,
                        this.subtitulo as Subtitulo,
                    );
                    this.$emit('criou', questao);
                } catch (e) {
                    if (e instanceof ErroQuestaoInvalida) {
                        this.erro = e.message;
                        this.inconsistencias = e.inconsistencias;
                    } else {
                        this.erro = 'Ocorreu um erro desconhecido';
                    }
                }
            } else {
                //id
                try {
                    this.questao.setId(this.idFormulario as IdFormulario);
                } catch (e) {
                    if (e instanceof ErroNaEdicaoDaQuestao) {
                        this.inconsistencias.push(e.message);
                    } else {
                        this.inconsistencias.push(
                            'Ocorreu um erro desconhecido na atualização do id',
                        );
                    }
                }
                //titulo
                try {
                    this.questao.setTitulo(this.titulo as Titulo);
                } catch (e) {
                    if (e instanceof ErroNaEdicaoDaQuestao) {
                        this.inconsistencias.push(e.message);
                    } else {
                        this.inconsistencias.push(
                            'Ocorreu um erro desconhecido na atualização do titulo',
                        );
                    }
                }
                //subtitulo
                try {
                    this.questao.setSubtitulo(this.subtitulo as Subtitulo);
                } catch (e) {
                    if (e instanceof ErroNaEdicaoDaQuestao) {
                        this.inconsistencias.push(e.message);
                    } else {
                        this.inconsistencias.push(
                            'Ocorreu um erro desconhecido na atualização do subtitulo',
                        );
                    }
                }
                //opcoes
                try {
                    this.questao.setOpcoes(
                        this.opcoes as ListaEditavel<OpcaoEditavel>,
                    );
                } catch (e) {
                    if (e instanceof ErroNaEdicaoDaQuestao) {
                        this.inconsistencias.push(e.message);
                    } else {
                        this.inconsistencias.push(
                            'Ocorreu um erro desconhecido na atualização das opcoes',
                        );
                    }
                }
                if (this.inconsistencias.length) {
                    this.erro = 'Ocorreram erros na atualização da Questão';
                } else {
                    this.questao.encerrarEdicao();
                    this.$emit('atualizou', this.questao);
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

        <div class="opcoes">
            <ListaOpcoes
                :lista="(opcoes as ListaEditavel<OpcaoEditavel>)"
            ></ListaOpcoes>
        </div>

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
