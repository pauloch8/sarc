<script lang="ts">
import { defineComponent } from 'vue';
import TituloInput from '../../comum/TituloInput.vue';
import IdFormularioInput from '../../comum/IdFormularioInput.vue';
import TextoComponent from '../texto/TextoComponent.vue';
import BotoesSalvarCancelar from '../comum/BotoesSalvarCancelar.vue';
import VariavelComponent from '../variavel/VariavelComponent.vue';
import { Opcao } from '@/dominio/editor/Opcao';

export default defineComponent({
    name: 'OpcaoEdicao',
    components: {
        TituloInput,
        IdFormularioInput,
        TextoComponent,
        BotoesSalvarCancelar,
        VariavelComponent,
    },
    props: {
        opcao: {
            type: Opcao,
            required: true,
        },
    },
    emits: ['cancelou', 'salvou'],
});
</script>

<template>
    <article class="emEdicao">
        <header>Edição de Opção</header>

        <IdFormularioInput :titulo="opcao.getTitulo()"></IdFormularioInput>

        <TituloInput :titulo="opcao.getTitulo()"></TituloInput>

        <div>
            <h5>Variáveis</h5>
            <ul>
                <VariavelComponent
                    v-for="(variavel, indice) in opcao.getVariaveis()"
                    :key="indice"
                    :variavel="variavel"
                ></VariavelComponent>
            </ul>
            <a href="#" role="button" class="outline">+ Adicionar Variável</a>
        </div>

        <div class="textos">
            <h5>Textos</h5>
            <ul>
                <TextoComponent
                    v-for="(texto, indice) in opcao.getTextos()"
                    :key="indice"
                    :texto="texto"
                ></TextoComponent>
            </ul>
            <a href="#" role="button" class="outline">+ Adicionar Texto</a>
        </div>

        <footer>
            <BotoesSalvarCancelar
                @cancelou="$emit('cancelou')"
                @salvou="$emit('salvou')"
            ></BotoesSalvarCancelar>
        </footer>
    </article>
</template>

<style scoped>
label input[type='text'] {
    display: inline;
    width: 95%;
}

.textos {
    margin-top: 50px;
}
</style>
