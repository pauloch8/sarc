<script lang="ts">
import { defineComponent, inject } from 'vue';
import TituloInput from '../../comum/TituloInput.vue';
import IdFormularioFactory from '../../comum/IdFormularioFactory.vue';
import SubtituloInput from '../../comum/SubtituloInput.vue';
import ListaOpcoes from './opcao/ListaOpcoes.vue';
import BotoesSalvarCancelar from '../../comum/BotoesSalvarCancelar.vue';
import {
    QuestaoOpcaoEditavel,
    ErroQuestaoInvalida,
    ErroNaEdicaoDaQuestao,
    IQuestaoOpcaoEditavel,
} from '@/dominio/editor/questoes/questao-opcao/QuestaoOpcaoEditavel';
import { Titulo } from '@/dominio/comum/Titulo';
import { Subtitulo } from '@/dominio/comum/Subtitulo';
import { IdFormulario } from '@/dominio/comum/IdFormulario';
import { IQuestaoOpcaoEditavelFactory } from '@/dominio/editor/questoes/questao-opcao/QuestaoOpcaoEditavelFactory';
import { ListaEditavel } from '@/dominio/editor/comum/ListaEditavel';
import { OpcaoEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/OpcaoEditavel';
import ValorPadraoSelecao from './ValorPadraoSelecao.vue';
import { computed } from '@vue/reactivity';
import { IQuestaoSelecaoEditavel } from '@/dominio/editor/questoes/questao-selecao/QuestaoSelecaoEditavel';

export default defineComponent({
    name: 'QuestaoOpcaoEdicao',
    components: {
        IdFormularioFactory,
        TituloInput,
        SubtituloInput,
        ListaOpcoes,
        BotoesSalvarCancelar,
        ValorPadraoSelecao,
    },
    setup() {
        const factory = inject<IQuestaoOpcaoEditavelFactory>(
            'questaoOpcaoEditavelFactory',
        );
        if (!factory) {
            throw new Error(
                'Não injetada a dependência questaoOpcaoEditavelFactory',
            );
        }
        const listaQuestoes =
            inject<Array<IQuestaoOpcaoEditavel | IQuestaoSelecaoEditavel>>(
                'listaQuestoes',
            );
        if (!listaQuestoes) {
            throw new Error('Não injetada a dependência listaQuestoes');
        }
        return {
            factory,
            listaQuestoes,
        };
    },
    props: {
        questao: { type: QuestaoOpcaoEditavel, required: false },
        indice: { type: Number, required: true },
    },
    data() {
        const idFormulario = this.questao?.getId();
        const titulo = this.questao?.getTitulo();
        const subtitulo = this.questao?.getSubtitulo();
        const valorPadrao = this.questao?.getValorPadrao();
        const opcoes =
            this.questao?.getListaOpcoes() ||
            new ListaEditavel<OpcaoEditavel>();
        const erro = '';
        const inconsistencias: string[] = [];
        return {
            idFormulario,
            titulo,
            subtitulo,
            valorPadrao,
            opcoes,
            erro,
            inconsistencias,
        };
    },
    provide() {
        return {
            proximasQuestoes: computed(() => {
                const retorno = this.listaQuestoes.filter(questao => {
                    const questaoIndice = questao.getIndice();
                    const indiceDestaQuestao = this.indice;
                    const ehMaior = questaoIndice > indiceDestaQuestao;
                    return ehMaior;
                });
                return retorno;
            }),
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
        selecionouValorPadrao(valorPadrao: IdFormulario) {
            this.valorPadrao = valorPadrao;
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
                    this.opcoes as ListaEditavel<OpcaoEditavel>,
                    this.subtitulo as Subtitulo,
                    this.valorPadrao as IdFormulario,
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
        editar(questao: QuestaoOpcaoEditavel) {
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
                    this.opcoes as ListaEditavel<OpcaoEditavel>,
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
            //valor padrão
            try {
                questao.setValorPadrao(this.valorPadrao as IdFormulario);
            } catch (e) {
                if (e instanceof ErroNaEdicaoDaQuestao) {
                    this.inconsistencias.push(e.message);
                } else {
                    this.inconsistencias.push(
                        'Ocorreu um erro desconhecido na atualização do valor padrão: ' +
                            e,
                    );
                }
            }
            // verifica inconsistências
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

        <div v-if="valorPadrao">
            <ValorPadraoSelecao
                :listaOpcoes="(opcoes as ListaEditavel<OpcaoEditavel>)"
                :selecionado="valorPadrao as IdFormulario"
                @selecionou="selecionouValorPadrao"
            ></ValorPadraoSelecao>
        </div>
        <div v-else>
            <ValorPadraoSelecao
                :listaOpcoes="(opcoes as ListaEditavel<OpcaoEditavel>)"
                @selecionou="selecionouValorPadrao"
            ></ValorPadraoSelecao>
        </div>

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

footer {
    text-align: right;
}
</style>
