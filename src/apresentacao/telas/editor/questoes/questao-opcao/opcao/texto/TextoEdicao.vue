<script lang="ts">
import { defineComponent, inject } from 'vue';
import ListaDeEscapadores from './ListaDeEscapadores.vue';
import IdFormularioFactory from '../../../../comum/IdFormularioFactory.vue';
import TituloInput from '../../../../comum/TituloInput.vue';
import TextoModeloInput from '@/apresentacao/telas/editor/comum/TextoModeloInput.vue';
import BotoesSalvarCancelar from '../../../../comum/BotoesSalvarCancelar.vue';
import { IdFormulario } from '@/dominio/comum/IdFormulario';
import { Titulo } from '@/dominio/comum/Titulo';
import { TextoModelo } from '@/dominio/comum/TextoModelo';
import { InconsistenciasNaValidacaoDoTexto } from '@/dominio/editor/questoes/questao-opcao/opcao/texto/TextoEditavel';
import { ITextoEditavelFactory } from '@/dominio/editor/questoes/questao-opcao/opcao/texto/TextoEditavelFactory';
import {
    ErroNaEdicaoDoTexto,
    TextoEditavel,
} from '@/dominio/editor/questoes/questao-opcao/opcao/texto/TextoEditavel';
import { IEscapadorDeVariavel } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavel';
import { IEscapadorDeVariavelFactory } from '@/dominio/comum/escapador/variavel/EscapadorDeVariavelFactory';

export default defineComponent({
    name: 'TextoEdicao',
    components: {
        ListaDeEscapadores,
        IdFormularioFactory,
        TituloInput,
        TextoModeloInput,
        BotoesSalvarCancelar,
    },
    setup() {
        const textoEditavelFactory = inject<ITextoEditavelFactory>(
            'textoEditavelFactory',
        );
        if (!textoEditavelFactory) {
            throw new Error('Não injetada a dependência textoEditavelFactory');
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
            textoEditavelFactory,
            escapadorDeVariavelFactory,
            escapadoresVariaveis,
        };
    },
    props: {
        texto: { type: TextoEditavel, required: false },
        indice: { type: Number, required: false },
    },
    data() {
        const id = this.texto?.getId();
        const titulo = this.texto?.getTitulo();
        const textoModelo = this.texto?.getTextoModelo();
        const erro = '';
        const inconsistencias: string[] = [];
        const escapadoresInexistentes: IEscapadorDeVariavel[] = [];
        return {
            id,
            titulo,
            textoModelo,
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
        digitouTextoModelo(textoModelo: TextoModelo) {
            const escapadoresEscritos =
                this.escapadorDeVariavelFactory.criarEscapadoresDeTexto(
                    textoModelo.getTextoPlano(),
                );
            this.escapadoresInexistentes = escapadoresEscritos.filter(
                escrito => !this.escapadoresVariaveis?.includes(escrito),
            );
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
                    this.id as IdFormulario,
                    this.titulo as Titulo,
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
                texto.setId(this.id as IdFormulario);
            } catch (e) {
                if (e instanceof ErroNaEdicaoDoTexto) {
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
                texto.setTitulo(this.titulo as Titulo);
            } catch (e) {
                if (e instanceof ErroNaEdicaoDoTexto) {
                    this.inconsistencias.push(e.message);
                } else {
                    this.inconsistencias.push(
                        'Ocorreu um erro desconhecido na atualização do titulo: ' +
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
            // try {
            //     texto.setIndice(this.indice);
            // } catch (e) {
            //     if (e instanceof ErroNaEdicaoDoTexto) {
            //         this.inconsistencias.push(e.message);
            //     } else {
            //         this.inconsistencias.push(
            //             'Ocorreu um erro desconhecido na atualização do índice: ' +
            //                 e,
            //         );
            //     }
            // }
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

        <TextoModeloInput
            :textoModelo="(textoModelo as TextoModelo)"
            @digitou="digitouTextoModelo"
        ></TextoModeloInput>

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
