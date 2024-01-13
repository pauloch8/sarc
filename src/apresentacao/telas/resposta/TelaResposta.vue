<script lang="ts">
import {
    ProcessadorDeRespostaDeFormulario,
    TextoProcessado,
} from '@/dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormulario';
import { defineComponent, inject } from 'vue';
import FormularioComponent from './formulario/FormularioComponent.vue';
import RelatorioComponent from './relatorio/RelatorioComponent.vue';
import { IFormularioFactory } from '@/dominio/formulario/FormularioFactory';
import { IEspecificacaoRepository } from '@/dominio/especificacao/EspecificacaoRepository';
import { ProcessadorDeRespostaDeFormularioFactory } from '@/dominio/processamento/processador/resposta-formulario/ProcessadorDeRespostaDeFormularioFactory';
import { Formulario } from '@/dominio/formulario/Formulario';

export default defineComponent({
    name: 'TelaResposta',
    setup() {
        try {
            // injeta especificacaoRepository
            const especificacaoRepository = inject<IEspecificacaoRepository>(
                'especificacaoRepository',
            );
            if (!especificacaoRepository) {
                throw new Error(
                    'Não injetada a dependência especificacaoRepository',
                );
            }

            // injeta dependência formularioFactory
            const formularioFactory =
                inject<IFormularioFactory>('formularioFactory');
            if (!formularioFactory) {
                throw new Error('Não injetada a dependência formularioFactory');
            }

            // injeta dependência processadorFormularioFactory
            const processadorFormularioFactory =
                inject<ProcessadorDeRespostaDeFormularioFactory>(
                    'processadorFormularioFactory',
                );
            if (!processadorFormularioFactory) {
                throw new Error(
                    'Não injetada a dependência processadorFormularioFactory',
                );
            }

            // TODO: carregar do id passado por query string
            const especificacao =
                especificacaoRepository.carregar('programa_de_votos');
            const formulario =
                formularioFactory.criarDaEspecificacao(especificacao);

            const processadorFormulario =
                processadorFormularioFactory.criarDeEspecificacao(
                    especificacao,
                );

            // retorna dependências injetadas
            return {
                erroAoCarregar: null,
                formulario,
                processadorFormulario,
            };
        } catch (e) {
            debugger;
            return {
                erroAoCarregar: (e as Error).message,
                formulario: null,
                processadorFormulario: null,
            };
        }
    },
    components: {
        FormularioComponent,
        RelatorioComponent,
    },
    data() {
        const data = {
            textosProcessados: [] as TextoProcessado[],
            modoFormulario: true,
        };
        return data;
    },
    methods: {
        gerouRelatorio(textosProcessados: TextoProcessado[]) {
            this.textosProcessados = textosProcessados;
            this.modoFormulario = false;
        },
        voltouParaFormulario() {
            this.modoFormulario = true;
        },
    },
});
</script>

<template>
    <main v-if="erroAoCarregar">
        <article class="erro">
            Erro ao carregar a tela de respostas: {{ erroAoCarregar }}
        </article>
    </main>
    <main v-else>
        <Transition>
            <FormularioComponent
                v-if="modoFormulario"
                :formulario="(formulario as Formulario)"
                :processadorFormulario="(processadorFormulario as ProcessadorDeRespostaDeFormulario)"
                @gerou-relatorio="gerouRelatorio"
            ></FormularioComponent>
        </Transition>

        <Transition>
            <div v-if="!modoFormulario">
                <template v-for="textoRelatorio in textosProcessados">
                    <RelatorioComponent
                        v-if="!modoFormulario"
                        :key="textoRelatorio.id"
                        :relatorio="textoRelatorio"
                    ></RelatorioComponent>
                </template>
                <button @click="voltouParaFormulario">
                    Voltar para o Formulário
                </button>
            </div>
        </Transition>
    </main>
</template>

<style scoped>
.v-enter-from {
    transform: translateX(200px);
    opacity: 0;
}

.v-enter-active {
    transition: all 0.3s ease-out 0.3s;
}

.v-leave-active {
    transition: all 0.3s ease-in;
}

.v-leave-to {
    transform: translateX(-200px);
    opacity: 0;
}

@media print {
    body * {
        visibility: hidden;
    }
}
</style>
