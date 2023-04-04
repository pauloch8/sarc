<script lang="ts">
import { defineComponent, inject } from 'vue';
import ListaDeEscapadores from '../../../../comum/EscapadoresDisponiveis.vue';
import IdFormularioFactory from '../../../../comum/IdFormularioFactory.vue';
import TituloInput from '../../../../comum/TituloInput.vue';
import TextoModeloInput from '@/apresentacao/telas/editor/comum/TextoModeloInput.vue';
import BotoesSalvarCancelar from '../../../../comum/BotoesSalvarCancelar.vue';
import { IdFormulario } from '@/dominio/comum/IdFormulario';
import { Titulo } from '@/dominio/comum/Titulo';
import { TextoModelo } from '@/dominio/comum/TextoModelo';
import { ITextoEditavelFactory } from '@/dominio/editor/questoes/comum/texto/TextoEditavelFactory';
import {
    TextoEditavel,
    ErroNaEdicaoDoTexto,
    InconsistenciasNaValidacaoDoTexto,
} from '@/dominio/editor/questoes/comum/texto/TextoEditavel';
import { IEscapadorDeVariavel } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavel';
import IdFormularioInput from '@/apresentacao/telas/editor/comum/IdFormularioInput.vue';

export default defineComponent({
    name: 'TextoEdicao',
    components: {
        IdFormularioInput,
        ListaDeEscapadores,
        TextoModeloInput,
        BotoesSalvarCancelar,
    },
    setup() {
        // injeção textoEditavelFactory
        const textoEditavelFactory = inject<ITextoEditavelFactory>(
            'textoEditavelFactory',
        );
        if (!textoEditavelFactory) {
            throw new Error('Não injetada a dependência textoEditavelFactory');
        }

        // injeção escapadoresVariaveis
        const escapadores = inject<IEscapadorDeVariavel[]>(
            'escapadoresVariaveis',
        );

        return {
            textoEditavelFactory,
            escapadores,
        };
    },
    props: {
        texto: { type: TextoEditavel, required: false },
        indice: { type: Number, required: false },
    },
    data() {
        const categoria = this.texto?.getCategoria();
        const textoModelo = this.texto?.getTextoModelo();
        const erro = '';
        const inconsistencias: string[] = [];
        return {
            categoria,
            textoModelo,
            erro,
            inconsistencias,
        };
    },
    computed: {
        escapadoresUsados() {
            return this.textoModelo?.getEscapadores();
        },
        escapadoresInexistentes() {
            const escapadoresInexistentes = this.textoModelo
                ?.getEscapadores()
                ?.filter(escrito =>
                    this.escapadores?.every(
                        escapador => !escapador.ehIgual(escrito),
                    ),
                );
            return escapadoresInexistentes;
        },
    },
    methods: {
        digitouCategoria(categoria: IdFormulario) {
            this.categoria = categoria;
        },
        digitouTextoModelo(textoModelo: TextoModelo) {
            this.textoModelo = textoModelo;
        },
        cancelar() {
            this.texto?.encerrarEdicao();
            this.$emit('cancelou');
        },
        salvar() {
            this.erro = '';
            this.inconsistencias = [];
            if (!this.texto) {
                this.criar();
            } else {
                this.editar(this.texto);
            }
        },
        criar() {
            try {
                const texto = this.textoEditavelFactory.criar(
                    this.categoria as IdFormulario,
                    this.textoModelo as TextoModelo,
                    this.indice as number,
                );
                this.$emit('criou', texto);
            } catch (e) {
                if (e instanceof InconsistenciasNaValidacaoDoTexto) {
                    this.erro = e.message;
                    this.inconsistencias = e.inconsistencias;
                } else {
                    this.erro = 'Ocorreu um erro desconhecido: ' + e;
                }
            }
        },
        editar(texto: TextoEditavel) {
            try {
                texto.setCategoria(this.categoria as IdFormulario);
            } catch (e) {
                if (e instanceof ErroNaEdicaoDoTexto) {
                    this.inconsistencias.push(e.message);
                } else {
                    this.inconsistencias.push(
                        'Ocorreu um erro desconhecido na atualização da categoria: ' +
                            e,
                    );
                }
            }
            //textos
            try {
                texto.setTextoModelo(this.textoModelo as TextoModelo);
            } catch (e) {
                if (e instanceof ErroNaEdicaoDoTexto) {
                    this.inconsistencias.push(e.message);
                } else {
                    this.inconsistencias.push(
                        'Ocorreu um erro desconhecido na atualização do Texto Modelo: ' +
                            e,
                    );
                }
            }
            if (this.inconsistencias.length) {
                this.erro = 'Ocorreram erros na atualização do Texto';
            } else {
                texto.encerrarEdicao();
                this.$emit('atualizou', this.texto);
            }
        },
    },
    emits: ['cancelou', 'criou', 'atualizou'],
});
</script>

<template>
    <article class="emEdicao">
        <header>Edição de Texto</header>

        <IdFormularioInput
            rotulo="Categoria"
            :idFormulario="(categoria as IdFormulario)"
            @digitou="digitouCategoria"
        ></IdFormularioInput>

        <ListaDeEscapadores
            v-if="escapadores"
            :escapadores="escapadores"
            :escapadoresUsados="escapadoresUsados"
        ></ListaDeEscapadores>

        <TextoModeloInput
            :textoModelo="(textoModelo as TextoModelo)"
            @digitou="digitouTextoModelo"
        ></TextoModeloInput>

        <article
            class="erro escapadoresInexistentes"
            v-if="escapadoresInexistentes?.length"
        >
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

        <article class="erro inconsistencias" v-if="erro">
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
