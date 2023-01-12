<script lang="ts">
import { defineComponent, inject } from 'vue';
import IdFormularioFactory from '../../../../comum/IdFormularioFactory.vue';
import TituloInput from '../../../../comum/TituloInput.vue';
import BotoesSalvarCancelar from '../../../../comum/BotoesSalvarCancelar.vue';
import { IdFormulario } from '@/dominio/comum/IdFormulario';
import { Titulo } from '@/dominio/comum/Titulo';
import TextoModeloInput from '@/apresentacao/telas/editor/comum/TextoModeloInput.vue';
import { TextoModelo } from '@/dominio/comum/TextoModelo';
import { InconsistenciasNaValidacaoDoTexto } from '@/dominio/editor/questoes/questao-opcao/opcao/texto/TextoEditavel';
import { ITextoEditavelFactory } from '@/dominio/editor/questoes/questao-opcao/opcao/texto/TextoEditavelFactory';
import {
    ErroNaEdicaoDoTexto,
    TextoEditavel,
} from '@/dominio/editor/questoes/questao-opcao/opcao/texto/TextoEditavel';

export default defineComponent({
    name: 'TextoEdicao',
    components: {
        IdFormularioFactory,
        TituloInput,
        TextoModeloInput,
        BotoesSalvarCancelar,
    },
    setup() {
        const factory = inject<ITextoEditavelFactory>('textoEditavelFactory');
        if (!factory) {
            throw new Error('Não injetada a dependência textoEditavelFactory');
        }
        return {
            factory,
        };
    },
    props: {
        texto: { type: TextoEditavel, required: false },
        indice: { type: Number, required: true },
    },
    data() {
        const id = this.texto?.getId();
        const titulo = this.texto?.getTitulo();
        const textoModelo = this.texto?.getTextoModelo();
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
                const texto = this.factory.criar(
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
                    this.erro = 'Ocorreu um erro desconhecido';
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
                        'Ocorreu um erro desconhecido na atualização do id',
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
                        'Ocorreu um erro desconhecido na atualização do titulo',
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
                        'Ocorreu um erro desconhecido na atualização do Texto Modelo',
                    );
                }
            }
            try {
                texto.setIndice(this.indice);
            } catch (e) {
                if (e instanceof ErroNaEdicaoDoTexto) {
                    this.inconsistencias.push(e.message);
                } else {
                    this.inconsistencias.push(
                        'Ocorreu um erro desconhecido na atualização do índice',
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

        <IdFormularioFactory
            :titulo="(titulo as Titulo)"
            @gerouId="gerouId"
        ></IdFormularioFactory>

        <TituloInput
            :titulo="(titulo as Titulo)"
            @digitou="digitouTitulo"
        ></TituloInput>

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
