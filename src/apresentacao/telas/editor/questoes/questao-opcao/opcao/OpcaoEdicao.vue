<script lang="ts">
import { defineComponent, inject } from 'vue';
import TituloInput from '../../../comum/TituloInput.vue';
import IdFormularioFactory from '../../../comum/IdFormularioFactory.vue';
import ListaTextos from './texto/ListaTextos.vue';
import ListaVariavel from './variavel/ListaVariaveis.vue';
import BotoesSalvarCancelar from '../../../comum/BotoesSalvarCancelar.vue';
import VariavelComponent from './variavel/VariavelComponent.vue';
import {
    ErroNaEdicaoDaOpcao,
    ErroOpcaoInvalida,
    OpcaoEditavel,
} from '@/dominio/editor/questoes/questao-opcao/opcao/OpcaoEditavel';
import { IOpcaoEditavelFactory } from '@/dominio/editor/questoes/questao-opcao/opcao/OpcaoEditavelFactory';
import { Titulo } from '@/dominio/editor/comum/Titulo';
import { IdFormulario } from '@/dominio/editor/comum/IdFormulario';
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
        const textos =
            this.opcao?.getTextos() || new ListaEditavel<TextoEditavel>();
        const variaveis =
            this.opcao?.getVariaveis() || new ListaEditavel<VariavelEditavel>();
        const erro = '';
        const inconsistencias: string[] = [];
        return {
            idFormulario,
            titulo,
            textos,
            variaveis,
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
        cancelar() {
            this.opcao?.encerrarEdicao();
            this.$emit('cancelou');
        },
        salvar() {
            this.erro = '';
            this.inconsistencias = [];
            if (!this.opcao) {
                try {
                    const opcao = this.factory.criar(
                        this.idFormulario as IdFormulario,
                        this.titulo as Titulo,
                        this.indice as number,
                        this.textos as ListaEditavel<TextoEditavel>,
                    );
                    this.$emit('criou', opcao);
                } catch (e) {
                    if (e instanceof ErroOpcaoInvalida) {
                        this.erro = e.message;
                        this.inconsistencias = e.inconsistencias;
                    } else {
                        this.erro = 'Ocorreu um erro desconhecido';
                    }
                }
            } else {
                //id
                try {
                    this.opcao.setId(this.idFormulario as IdFormulario);
                } catch (e) {
                    if (e instanceof ErroNaEdicaoDaOpcao) {
                        this.inconsistencias.push(e.message);
                    } else {
                        this.inconsistencias.push(
                            'Ocorreu um erro desconhecido na atualização do id',
                        );
                    }
                }
                //titulo
                try {
                    this.opcao.setTitulo(this.titulo as Titulo);
                } catch (e) {
                    if (e instanceof ErroNaEdicaoDaOpcao) {
                        this.inconsistencias.push(e.message);
                    } else {
                        this.inconsistencias.push(
                            'Ocorreu um erro desconhecido na atualização do titulo',
                        );
                    }
                }
                //textos
                try {
                    this.opcao.setTextos(
                        this.textos as ListaEditavel<TextoEditavel>,
                    );
                } catch (e) {
                    if (e instanceof ErroNaEdicaoDaOpcao) {
                        this.inconsistencias.push(e.message);
                    } else {
                        this.inconsistencias.push(
                            'Ocorreu um erro desconhecido na atualização dos Textos',
                        );
                    }
                }
                if (this.inconsistencias.length) {
                    this.erro = 'Ocorreram erros na atualização da Questão';
                } else {
                    this.opcao.encerrarEdicao();
                    this.$emit('atualizou', this.opcao);
                }
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

        <!-- <div>
            <h5>Variáveis</h5>
            <ul>
                <VariavelComponent
                    v-for="(variavel, indice) in opcao.getVariaveis()"
                    :key="indice"
                    :variavel="variavel"
                ></VariavelComponent>
            </ul>
            <a href="#" role="button" class="outline">+ Adicionar Variável</a>
        </div> -->

        <ListaVariavel
            :lista="(variaveis as ListaEditavel<VariavelEditavel>)"
        ></ListaVariavel>

        <ListaTextos
            :lista="(textos as ListaEditavel<TextoEditavel>)"
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
