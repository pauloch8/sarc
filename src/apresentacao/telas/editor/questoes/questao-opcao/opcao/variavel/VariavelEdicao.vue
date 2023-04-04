<script lang="ts">
import { defineComponent, inject } from 'vue';
import IdFormularioFactory from '../../../../comum/IdFormularioFactory.vue';
import TituloInput from '../../../../comum/TituloInput.vue';
import TipoVariavelSelecao from './TipoVariavelSelecao.vue';
import BotoesSalvarCancelar from '../../../../comum/BotoesSalvarCancelar.vue';
import { IdFormulario, IIdFormulario } from '@/dominio/comum/IdFormulario';
import { ITitulo, Titulo } from '@/dominio/comum/Titulo';
import { IVariavelEditavelFactory } from '@/dominio/editor/questoes/comum/variavel/VariavelEditavelFactory';
import { VariavelEditavel } from '@/dominio/editor/questoes/comum/variavel/VariavelEditavel';
import {
    ErroInconsistenciasNaValidacao,
    ErroNaEdicao,
} from '@/dominio/editor/comum/ItemEditavel';
import { ITipoVariavelID } from '@/dominio/editor/questoes/comum/variavel/tipo-variavel/TipoVariavelID';

export default defineComponent({
    name: 'VariavelEdicao',
    components: {
        IdFormularioFactory,
        TituloInput,
        TipoVariavelSelecao,
        BotoesSalvarCancelar,
    },
    setup() {
        const factory = inject<IVariavelEditavelFactory>(
            'variavelEditavelFactory',
        );
        if (!factory) {
            throw new Error(
                'Não injetada a dependência variavelEditavelFactory',
            );
        }
        return {
            factory,
        };
    },
    props: {
        variavel: { type: VariavelEditavel, required: false },
        indice: { type: Number, required: false },
    },
    data() {
        const id = this.variavel?.getId();
        const titulo = this.variavel?.getTitulo();
        const tipo = this.variavel?.getTipo();
        const erro = '';
        const inconsistencias: string[] = [];
        return {
            id,
            titulo,
            tipo,
            erro,
            inconsistencias,
        };
    },
    methods: {
        gerouId(id: IIdFormulario) {
            this.id = id;
        },
        digitouTitulo(titulo: ITitulo) {
            this.titulo = titulo;
        },
        selecionarTipoVariavel(tipo: ITipoVariavelID) {
            this.tipo = tipo;
        },
        cancelar() {
            this.variavel?.encerrarEdicao();
            this.$emit('cancelou');
        },
        salvar() {
            this.erro = '';
            this.inconsistencias = [];
            if (!this.variavel) {
                this.criar();
            } else {
                this.editar(this.variavel);
            }
        },
        criar() {
            try {
                const variavel = this.factory.criar(
                    this.id as IIdFormulario,
                    this.titulo as ITitulo,
                    this.tipo as ITipoVariavelID,
                    this.indice as number,
                );
                this.$emit('criou', variavel);
            } catch (e) {
                if (e instanceof ErroInconsistenciasNaValidacao) {
                    this.erro = e.message;
                    this.inconsistencias = e.inconsistencias;
                } else {
                    this.erro = 'Ocorreu um erro desconhecido: ' + e;
                }
            }
        },
        editar(variavel: VariavelEditavel) {
            try {
                variavel.setId(this.id as IdFormulario);
            } catch (e) {
                if (e instanceof ErroNaEdicao) {
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
                variavel.setTitulo(this.titulo as Titulo);
            } catch (e) {
                if (e instanceof ErroNaEdicao) {
                    this.inconsistencias.push(e.message);
                } else {
                    this.inconsistencias.push(
                        'Ocorreu um erro desconhecido na atualização do titulo: ' +
                            e,
                    );
                }
            }
            //variavels
            try {
                variavel.setTipo(this.tipo as ITipoVariavelID);
            } catch (e) {
                if (e instanceof ErroNaEdicao) {
                    this.inconsistencias.push(e.message);
                } else {
                    this.inconsistencias.push(
                        'Ocorreu um erro desconhecido na atualização do tipo da variável: ' +
                            e,
                    );
                }
            }
            // try {
            //     variavel.setIndice(this.indice);
            // } catch (e) {
            //     if (e instanceof ErroNaEdicao) {
            //         this.inconsistencias.push(e.message);
            //     } else {
            //         this.inconsistencias.push(
            //             'Ocorreu um erro desconhecido na atualização do índice',
            //         );
            //     }
            // }
            if (this.inconsistencias.length) {
                this.erro = 'Ocorreram erros na atualização do Variavel';
            } else {
                variavel.encerrarEdicao();
                this.$emit('atualizou', this.variavel);
            }
        },
    },
    emits: ['cancelou', 'criou', 'atualizou'],
});
</script>

<template>
    <article class="emEdicao">
        <header>Edição de Variavel</header>

        <IdFormularioFactory
            :titulo="(titulo as Titulo)"
            @gerouId="gerouId"
        ></IdFormularioFactory>

        <TituloInput
            :titulo="(titulo as Titulo)"
            @digitou="digitouTitulo"
        ></TituloInput>

        <TipoVariavelSelecao
            @selecionou="selecionarTipoVariavel"
        ></TipoVariavelSelecao>

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
