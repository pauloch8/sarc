<!-- <script lang="ts">
import { defineComponent, inject } from 'vue';
import ListaDeEscapadores from './ListaDeEscapadores.vue';
import IdFormularioFactory from '../../../../comum/IdFormularioFactory.vue';
import TituloInput from '../../../../comum/TituloInput.vue';
import ModeloModeloInput from '@/apresentacao/telas/editor/comum/ModeloModeloInput.vue';
import BotoesSalvarCancelar from '../../../../comum/BotoesSalvarCancelar.vue';
import { IdFormulario } from '@/dominio/comum/IdFormulario';
import { Titulo } from '@/dominio/comum/Titulo';
import { ModeloModelo } from '@/dominio/comum/ModeloModelo';
import { InconsistenciasNaValidacaoDoModelo } from '@/dominio/editor/questoes/questao-opcao/opcao/modelo/ModeloEditavel';
import { IModeloEditavelFactory } from '@/dominio/editor/questoes/questao-opcao/opcao/modelo/ModeloEditavelFactory';
import {
    ErroNaEdicaoDoModelo,
    ModeloEditavel,
} from '@/dominio/editor/questoes/questao-opcao/opcao/modelo/ModeloEditavel';
import { IEscapadorDeVariavel } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavel';
import { IEscapadorDeVariavelFactory } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavelFactory';

export default defineComponent({
    name: 'ModeloEdicao',
    components: {
        ListaDeEscapadores,
        IdFormularioFactory,
        TituloInput,
        ModeloModeloInput,
        BotoesSalvarCancelar,
    },
    setup() {
        const modeloEditavelFactory = inject<IModeloEditavelFactory>(
            'modeloEditavelFactory',
        );
        if (!modeloEditavelFactory) {
            throw new Error('Não injetada a dependência modeloEditavelFactory');
        }
        const escapadorDeVariavelFactory = inject<IEscapadorDeVariavelFactory>(
            'escapadorDeVariavelFactory',
        );
        if (!escapadorDeVariavelFactory) {
            throw new Error(
                'Não injetada a dependência escapadorDeVariavelFactory',
            );
        }
        const escapadoresVariaveis = inject<IEscapadorDeVariavel[]>(
            'escapadoresVariaveis',
        );
        return {
            modeloEditavelFactory,
            escapadorDeVariavelFactory,
            escapadoresVariaveis,
        };
    },
    props: {
        modelo: { type: ModeloEditavel, required: false },
        indice: { type: Number, required: false },
    },
    data() {
        const id = this.modelo?.getId();
        const titulo = this.modelo?.getTitulo();
        const modeloModelo = this.modelo?.getModeloModelo();
        const erro = '';
        const inconsistencias: string[] = [];
        const escapadoresInexistentes: IEscapadorDeVariavel[] = [];
        return {
            id,
            titulo,
            modeloModelo,
            erro,
            inconsistencias,
            escapadoresInexistentes,
        };
    },
    methods: {
        gerouId(id: IdFormulario) {
            this.id = id;
        },
        digitouTitulo(titulo: Titulo) {
            this.titulo = titulo;
        },
        digitouModeloModelo(modeloModelo: ModeloModelo) {
            const escapadoresEscritos =
                this.escapadorDeVariavelFactory.criarEscapadoresDeModelo(
                    modeloModelo.getModeloPlano(),
                );
            this.escapadoresInexistentes = escapadoresEscritos.filter(
                escrito => !this.escapadoresVariaveis?.includes(escrito),
            );
            this.modeloModelo = modeloModelo;
        },
        cancelar() {
            this.modelo?.encerrarEdicao();
            this.$emit('cancelou');
        },
        salvar() {
            this.erro = '';
            this.inconsistencias = [];
            if (!this.modelo) {
                this.criar();
            } else {
                this.editar(this.modelo);
            }
        },
        criar() {
            try {
                const modelo = this.modeloEditavelFactory.criar(
                    this.id as IdFormulario,
                    this.titulo as Titulo,
                    this.modeloModelo as ModeloModelo,
                    this.indice as number,
                );
                this.$emit('criou', modelo);
            } catch (e) {
                if (e instanceof InconsistenciasNaValidacaoDoModelo) {
                    this.erro = e.message;
                    this.inconsistencias = e.inconsistencias;
                } else {
                    this.erro = 'Ocorreu um erro desconhecido: ' + e;
                }
            }
        },
        editar(modelo: ModeloEditavel) {
            try {
                modelo.setId(this.id as IdFormulario);
            } catch (e) {
                if (e instanceof ErroNaEdicaoDoModelo) {
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
                modelo.setTitulo(this.titulo as Titulo);
            } catch (e) {
                if (e instanceof ErroNaEdicaoDoModelo) {
                    this.inconsistencias.push(e.message);
                } else {
                    this.inconsistencias.push(
                        'Ocorreu um erro desconhecido na atualização do titulo: ' +
                            e,
                    );
                }
            }
            //modelos
            try {
                modelo.setModeloModelo(this.modeloModelo as ModeloModelo);
            } catch (e) {
                if (e instanceof ErroNaEdicaoDoModelo) {
                    this.inconsistencias.push(e.message);
                } else {
                    this.inconsistencias.push(
                        'Ocorreu um erro desconhecido na atualização do Modelo Modelo: ' +
                            e,
                    );
                }
            }
            // try {
            //     modelo.setIndice(this.indice);
            // } catch (e) {
            //     if (e instanceof ErroNaEdicaoDoModelo) {
            //         this.inconsistencias.push(e.message);
            //     } else {
            //         this.inconsistencias.push(
            //             'Ocorreu um erro desconhecido na atualização do índice: ' +
            //                 e,
            //         );
            //     }
            // }
            if (this.inconsistencias.length) {
                this.erro = 'Ocorreram erros na atualização do Modelo';
            } else {
                modelo.encerrarEdicao();
                this.$emit('atualizou', this.modelo);
            }
        },
    },
    emits: ['cancelou', 'criou', 'atualizou'],
});
</script>

<template>
    <article class="emEdicao">
        <header>Edição de Modelo</header>

        <IdFormularioFactory
            :titulo="(titulo as Titulo)"
            @gerouId="gerouId"
        ></IdFormularioFactory>

        <TituloInput
            :titulo="(titulo as Titulo)"
            @digitou="digitouTitulo"
        ></TituloInput>

        <ListaDeEscapadores
            v-if="escapadoresVariaveis"
            :escapadoresVariaveis="escapadoresVariaveis"
        ></ListaDeEscapadores>

        <article class="erro" v-if="escapadoresInexistentes.length">
            Foram escritos escapadores inexistentes:
            <ul>
                <li
                    v-for="(escapador, index) in escapadoresInexistentes"
                    :key="index"
                >
                    {{ escapador.toString() }}
                </li>
            </ul>
        </article>

        <ModeloModeloInput
            :modeloModelo="(modeloModelo as ModeloModelo)"
            @digitou="digitouModeloModelo"
        ></ModeloModeloInput>

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
</style> -->
