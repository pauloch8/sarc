<script lang="ts">
import { defineComponent, inject } from 'vue';
import { computed } from '@vue/reactivity';
import ListaTextos from '../../comum/texto/ListaTextos.vue';
import ListaVariavel from '../../comum/variavel/ListaVariaveis.vue';
import TituloInput from '../../../comum/TituloInput.vue';
import IdFormularioFactory from '../../../comum/IdFormularioFactory.vue';
import BotoesSalvarCancelar from '../../../comum/BotoesSalvarCancelar.vue';
import {
    SelecaoEditavel,
    ErroNaEdicaoDaSelecao,
    ErroInconsistenciasNaValidacaoDaSelecao,
} from '@/dominio/editor/questoes/questao-selecao/selecao/SelecaoEditavel';
import { ISelecaoEditavelFactory } from '@/dominio/editor/questoes/questao-selecao/selecao/SelecaoEditavelFactory';
import { Titulo } from '@/dominio/comum/Titulo';
import { IdFormulario } from '@/dominio/comum/IdFormulario';
import { ListaEditavel } from '@/dominio/editor/comum/ListaEditavel';
import { TextoEditavel } from '@/dominio/editor/questoes/comum/texto/TextoEditavel';
import { VariavelEditavel } from '@/dominio/editor/questoes/comum/variavel/VariavelEditavel';

export default defineComponent({
    name: 'SelecaoEdicao',
    components: {
        IdFormularioFactory,
        TituloInput,
        ListaTextos,
        ListaVariavel,
        BotoesSalvarCancelar,
    },
    setup() {
        const factory = inject<ISelecaoEditavelFactory>(
            'selecaoEditavelFactory',
        );
        if (!factory) {
            throw new Error(
                'Não injetada a dependência selecaoEditavelFactory',
            );
        }
        return {
            factory,
        };
    },
    props: {
        selecao: { type: SelecaoEditavel, required: false },
        indice: { type: Number, required: false },
    },
    data() {
        const idFormulario = this.selecao?.getId();
        const titulo = this.selecao?.getTitulo();
        //const ramificacao = this.selecao?.getRamificacao();
        //const valorPadrao = this.selecao?.getValorPadrao();
        const listaTextos =
            this.selecao?.getTextos() || new ListaEditavel<TextoEditavel>();
        const listaVariaveis =
            this.selecao?.getVariaveis() ||
            new ListaEditavel<VariavelEditavel>();
        const erro = '';
        const inconsistencias: string[] = [];
        return {
            idFormulario,
            titulo,
            listaTextos,
            listaVariaveis,
            erro,
            inconsistencias,
        };
    },
    provide() {
        return {
            escapadoresVariaveis: computed(() => {
                const escapadores = this.listaVariaveis
                    .getItens()
                    .map(item => item.getEscapador());
                if (escapadores.length) {
                    return escapadores;
                }
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
        cancelar() {
            this.selecao?.encerrarEdicao();
            this.$emit('cancelou');
        },
        salvar() {
            this.erro = '';
            this.inconsistencias = [];
            if (!this.selecao) {
                this.criar();
            } else {
                this.atualizar();
            }
        },
        criar() {
            try {
                const selecao = this.factory.criar(
                    this.idFormulario as IdFormulario,
                    this.titulo as Titulo,
                    this.indice as number,
                    this.listaTextos as ListaEditavel<TextoEditavel>,
                );
                this.$emit('criou', selecao);
            } catch (e) {
                if (e instanceof ErroInconsistenciasNaValidacaoDaSelecao) {
                    this.erro = e.message;
                    this.inconsistencias = e.inconsistencias;
                } else {
                    this.erro = 'Ocorreu um erro desconhecido: ' + e;
                }
            }
        },
        atualizar() {
            const selecao = this.selecao as SelecaoEditavel;
            //id
            try {
                selecao.setId(this.idFormulario as IdFormulario);
            } catch (e) {
                if (e instanceof ErroNaEdicaoDaSelecao) {
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
                selecao.setTitulo(this.titulo as Titulo);
            } catch (e) {
                if (e instanceof ErroNaEdicaoDaSelecao) {
                    this.inconsistencias.push(e.message);
                } else {
                    this.inconsistencias.push(
                        'Ocorreu um erro desconhecido na atualização do titulo: ' +
                            e,
                    );
                }
            }
            //variaveis
            try {
                selecao.setVariaveis(this.listaVariaveis);
            } catch (e) {
                if (e instanceof ErroNaEdicaoDaSelecao) {
                    this.inconsistencias.push(e.message);
                } else {
                    this.inconsistencias.push(
                        'Ocorreu um erro desconhecido na atualização das variáveis: ' +
                            e,
                    );
                }
            }
            //textos
            try {
                selecao.setTextos(this.listaTextos);
            } catch (e) {
                if (e instanceof ErroNaEdicaoDaSelecao) {
                    this.inconsistencias.push(e.message);
                } else {
                    this.inconsistencias.push(
                        'Ocorreu um erro desconhecido na atualização dos Textos: ' +
                            e,
                    );
                }
            }
            if (this.inconsistencias.length) {
                this.erro = 'Ocorreram erros na atualização da Questão';
            } else {
                selecao.encerrarEdicao();
                this.$emit('atualizou', this.selecao);
            }
        },
    },
    emits: ['cancelou', 'criou', 'atualizou'],
});
</script>

<template>
    <article class="emEdicao">
        <header>Edição de Opção</header>

        <IdFormularioFactory
            :titulo="(titulo as Titulo)"
            @gerouId="gerouId"
        ></IdFormularioFactory>

        <TituloInput
            :titulo="(titulo as Titulo)"
            @digitou="digitouTitulo"
        ></TituloInput>

        <ListaVariavel
            :lista="(listaVariaveis as ListaEditavel<VariavelEditavel>)"
        ></ListaVariavel>

        <ListaTextos
            :lista="(listaTextos as ListaEditavel<TextoEditavel>)"
        ></ListaTextos>

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

<style scoped>
label input[type='text'] {
    display: inline;
    width: 95%;
}

footer {
    text-align: right;
}
</style>
