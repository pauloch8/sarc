<script lang="ts">
import { defineComponent, inject } from 'vue';
import TituloInput from '../../comum/TituloInput.vue';
import IdFormularioFactory from '../../comum/IdFormularioFactory.vue';
import SubtituloInput from '../../comum/SubtituloInput.vue';
import ListaOpcoes from './selecao/ListaSelecoes.vue';
import BotoesSalvarCancelar from '../../comum/BotoesSalvarCancelar.vue';
import {
    QuestaoSelecaoEditavel,
    ErroQuestaoInvalida,
    ErroNaEdicaoDaQuestao,
} from '@/dominio/editor/questoes/questao-selecao/QuestaoSelecaoEditavel';
import { Titulo } from '@/dominio/comum/Titulo';
import { Subtitulo } from '@/dominio/comum/Subtitulo';
import { IdFormulario } from '@/dominio/comum/IdFormulario';
import { IQuestaoSelecaoEditavelFactory } from '@/dominio/editor/questoes/questao-selecao/QuestaoSelecaoEditavelFactory';
import { ListaEditavel } from '@/dominio/editor/comum/ListaEditavel';
import { SelecaoEditavel } from '@/dominio/editor/questoes/questao-selecao/selecao/SelecaoEditavel';

export default defineComponent({
    name: 'QuestaoSelecaoEdicao',
    components: {
        IdFormularioFactory,
        TituloInput,
        SubtituloInput,
        ListaOpcoes,
        BotoesSalvarCancelar,
    },
    setup() {
        const factory = inject<IQuestaoSelecaoEditavelFactory>(
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
        questao: { type: QuestaoSelecaoEditavel, required: false },
        indice: { type: Number, required: false },
    },
    data() {
        const idFormulario = this.questao?.getId();
        const titulo = this.questao?.getTitulo();
        const subtitulo = this.questao?.getSubtitulo();
        const opcoes =
            this.questao?.getListaOpcoes() ||
            new ListaEditavel<SelecaoEditavel>();
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
                this.criar();
            } else {
                this.editar(this.questao);
            }
        },
        criar() {
            try {
                const questao = this.factory.criar(
                    this.idFormulario as IdFormulario,
                    this.titulo as Titulo,
                    this.indice as number,
                    this.opcoes as ListaEditavel<SelecaoEditavel>,
                    this.subtitulo as Subtitulo,
                );
                this.$emit('criou', questao);
            } catch (e) {
                if (e instanceof ErroQuestaoInvalida) {
                    this.erro = e.message;
                    this.inconsistencias = e.inconsistencias;
                } else {
                    this.erro = 'Ocorreu um erro desconhecido: ' + e;
                }
            }
        },
        editar(questao: QuestaoSelecaoEditavel) {
            //id
            try {
                questao.setId(this.idFormulario as IdFormulario);
            } catch (e) {
                if (e instanceof ErroNaEdicaoDaQuestao) {
                    this.inconsistencias.push(e.message);
                } else {
                    this.inconsistencias.push(
                        'Ocorreu um erro desconhecido na atualização do id: ' +
                            e,
                    );
                }
            }
            //titulo
            try {
                questao.setTitulo(this.titulo as Titulo);
            } catch (e) {
                if (e instanceof ErroNaEdicaoDaQuestao) {
                    this.inconsistencias.push(e.message);
                } else {
                    this.inconsistencias.push(
                        'Ocorreu um erro desconhecido na atualização do titulo: ' +
                            e,
                    );
                }
            }
            //subtitulo
            try {
                questao.setSubtitulo(this.subtitulo as Subtitulo);
            } catch (e) {
                if (e instanceof ErroNaEdicaoDaQuestao) {
                    this.inconsistencias.push(e.message);
                } else {
                    this.inconsistencias.push(
                        'Ocorreu um erro desconhecido na atualização do subtitulo: ' +
                            e,
                    );
                }
            }
            //opcoes
            try {
                questao.setListaOpcoes(
                    this.opcoes as ListaEditavel<SelecaoEditavel>,
                );
            } catch (e) {
                if (e instanceof ErroNaEdicaoDaQuestao) {
                    this.inconsistencias.push(e.message);
                } else {
                    this.inconsistencias.push(
                        'Ocorreu um erro desconhecido na atualização das opcoes: ' +
                            e,
                    );
                }
            }
            if (this.inconsistencias.length) {
                this.erro = 'Ocorreram erros na atualização da Questão';
            } else {
                questao.encerrarEdicao();
                this.$emit('atualizou', questao);
            }
        },
    },
    emits: ['cancelou', 'criou', 'atualizou'],
});
</script>

<template>
    <article class="emEdicao">
        <header>Edição de Questão</header>

        <IdFormularioFactory
            :titulo="(titulo as Titulo)"
            @gerouId="gerouId"
        ></IdFormularioFactory>

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
                :lista="(opcoes as ListaEditavel<SelecaoEditavel>)"
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

footer {
    text-align: right;
}
</style>
