<script lang="ts">
import { defineComponent, inject } from 'vue';
import ListaDeEscapadores from './ListaDeEscapadores.vue';
import IdFormularioFactory from '../comum/IdFormularioFactory.vue';
import TituloInput from '../comum/TituloInput.vue';
import BotoesSalvarCancelar from '../comum/BotoesSalvarCancelar.vue';
import TextoModeloInput from '@/apresentacao/telas/editor/comum/TextoModeloInput.vue';
import { IdFormulario } from '@/dominio/comum/IdFormulario';
import { Titulo } from '@/dominio/comum/Titulo';
import { TextoModelo } from '@/dominio/comum/TextoModelo';
import { IModeloEditavelFactory } from '@/dominio/editor/modelo/ModeloEditavelFactory';
import {
    ModeloEditavel,
    ErroNaEdicaoDoModelo,
    InconsistenciasNaValidacaoDoModelo,
} from '@/dominio/editor/modelo/ModeloEditavel';
import { IEscapadorDeQuestaoFactory } from '@/dominio/comum/escapador/questao/EscapadorDeQuestaoFactory';
import { IEscapadorDeQuestao } from '@/dominio/comum/escapador/questao/EscapadorDeQuestao';

export default defineComponent({
    name: 'ModeloEdicao',
    components: {
        ListaDeEscapadores,
        IdFormularioFactory,
        TituloInput,
        TextoModeloInput,
        BotoesSalvarCancelar,
    },
    setup() {
        // injeção modeloEditavelFactory
        const modeloEditavelFactory = inject<IModeloEditavelFactory>(
            'modeloEditavelFactory',
        );
        if (!modeloEditavelFactory) {
            throw new Error('Não injetada a dependência modeloEditavelFactory');
        }

        // injeção escapadorDeVariavelFactory
        const escapadorFactory = inject<IEscapadorDeQuestaoFactory>(
            'escapadorDeQuestaoFactory',
        );
        if (!escapadorFactory) {
            throw new Error(
                'Não injetada a dependência escapadorDeQuestaoFactory',
            );
        }

        // injeção escapadoresQuestoes
        const escapadores = inject<IEscapadorDeQuestao[]>(
            'escapadoresQuestoes',
        );

        return {
            modeloEditavelFactory,
            escapadorFactory,
            escapadores,
        };
    },
    props: {
        modelo: { type: ModeloEditavel, required: false },
        indice: { type: Number, required: false },
    },
    data() {
        const id = this.modelo?.getId();
        const titulo = this.modelo?.getTitulo();
        const textoModelo = this.modelo?.getTextoModelo();
        const erro = '';
        const inconsistencias: string[] = [];
        return {
            id,
            titulo,
            textoModelo,
            erro,
            inconsistencias,
        };
    },
    computed: {
        escapadoresUsados(): IEscapadorDeQuestao[] {
            if (!this.textoModelo) {
                return [];
            }
            const escapadoresUsados =
                this.escapadorFactory.criarEscapadoresDeTexto(
                    this.textoModelo.getTextoPlano(),
                );
            return escapadoresUsados;
        },
        escapadoresInexistentes(): IEscapadorDeQuestao[] {
            const escapadoresInexistentes = this.escapadoresUsados.filter(
                escrito => !this.escapadores?.includes(escrito),
            );
            return escapadoresInexistentes;
        },
    },
    methods: {
        gerouId(id: IdFormulario) {
            this.id = id;
        },
        digitouTitulo(titulo: Titulo) {
            this.titulo = titulo;
        },
        digitouTextoModelo(textoModelo: TextoModelo) {
            this.textoModelo = textoModelo;
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
                    this.textoModelo as TextoModelo,
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
                modelo.setTextoModelo(this.textoModelo as TextoModelo);
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
            v-if="escapadores"
            :escapadoresQuestoes="escapadores"
        >
        </ListaDeEscapadores>

        <TextoModeloInput
            :textoModelo="(textoModelo as TextoModelo)"
            @digitou="digitouTextoModelo"
        ></TextoModeloInput>

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
