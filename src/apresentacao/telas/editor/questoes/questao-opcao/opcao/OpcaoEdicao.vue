<script lang="ts">
import { defineComponent, inject } from 'vue';
import { computed } from '@vue/reactivity';
import TituloInput from '../../../comum/TituloInput.vue';
import IdFormularioFactory from '../../../comum/IdFormularioFactory.vue';
import ListaTextos from './texto/ListaTextos.vue';
import ListaVariavel from './variavel/ListaVariaveis.vue';
import BotoesSalvarCancelar from '../../../comum/BotoesSalvarCancelar.vue';
import {
    OpcaoEditavel,
    ErroNaEdicaoDaOpcao,
    ErroInconsistenciasNaValidacaoDaOpcao,
} from '@/dominio/editor/questoes/questao-opcao/opcao/OpcaoEditavel';
import { IOpcaoEditavelFactory } from '@/dominio/editor/questoes/questao-opcao/opcao/OpcaoEditavelFactory';
import { Titulo } from '@/dominio/comum/Titulo';
import { IdFormulario } from '@/dominio/comum/IdFormulario';
import { ListaEditavel } from '@/dominio/editor/questoes/ListaEditavel';
import { TextoEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/texto/TextoEditavel';
import { VariavelEditavel } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/VariavelEditavel';

export default defineComponent({
    name: 'OpcaoEdicao',
    components: {
        IdFormularioFactory,
        TituloInput,
        ListaTextos,
        ListaVariavel,
        BotoesSalvarCancelar,
    },
    setup() {
        const factory = inject<IOpcaoEditavelFactory>('opcaoEditavelFactory');
        if (!factory) {
            throw new Error('Não injetada a dependência opcaoEditavelFactory');
        }
        return {
            factory,
        };
    },
    props: {
        opcao: { type: OpcaoEditavel, required: false },
        indice: { type: Number, required: false },
    },
    data() {
        const idFormulario = this.opcao?.getId();
        const titulo = this.opcao?.getTitulo();
        //const ramificacao = this.opcao?.getRamificacao();
        //const valorPadrao = this.opcao?.getValorPadrao();
        const listaTextos =
            this.opcao?.getTextos() || new ListaEditavel<TextoEditavel>();
        const listaVariaveis =
            this.opcao?.getVariaveis() || new ListaEditavel<VariavelEditavel>();
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
            this.opcao?.encerrarEdicao();
            this.$emit('cancelou');
        },
        salvar() {
            this.erro = '';
            this.inconsistencias = [];
            if (!this.opcao) {
                this.criar();
            } else {
                this.atualizar();
            }
        },
        criar() {
            try {
                const opcao = this.factory.criar(
                    this.idFormulario as IdFormulario,
                    this.titulo as Titulo,
                    this.indice as number,
                    this.listaTextos as ListaEditavel<TextoEditavel>,
                );
                this.$emit('criou', opcao);
            } catch (e) {
                if (e instanceof ErroInconsistenciasNaValidacaoDaOpcao) {
                    this.erro = e.message;
                    this.inconsistencias = e.inconsistencias;
                } else {
                    this.erro = 'Ocorreu um erro desconhecido: ' + e;
                }
            }
        },
        atualizar() {
            const opcao = this.opcao as OpcaoEditavel;
            //id
            try {
                opcao.setId(this.idFormulario as IdFormulario);
            } catch (e) {
                if (e instanceof ErroNaEdicaoDaOpcao) {
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
                opcao.setTitulo(this.titulo as Titulo);
            } catch (e) {
                if (e instanceof ErroNaEdicaoDaOpcao) {
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
                opcao.setVariaveis(this.listaVariaveis);
            } catch (e) {
                if (e instanceof ErroNaEdicaoDaOpcao) {
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
                opcao.setTextos(this.listaTextos);
            } catch (e) {
                if (e instanceof ErroNaEdicaoDaOpcao) {
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
                opcao.encerrarEdicao();
                this.$emit('atualizou', this.opcao);
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
</style>
