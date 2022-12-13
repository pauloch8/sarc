<script lang="ts">
import { Selecao } from '@/dominio/formulario/questoes/selecao/Selecao';
import { defineComponent } from 'vue';
import VariavelComponent from './VariavelComponent.vue';

export default defineComponent({
    name: 'OpcaoComponent',
    props: {
        selecao: {
            type: Selecao,
            required: true,
        },
        questaoId: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            valores: [],
        };
    },
    computed: {
        selecionado() {
            return this.valores.length > 0;
        },
        selecaoId() {
            return this.questaoId + this.selecao.getId();
        },
    },
    methods: {
        alterarSelecao(evento: Event) {
            const target = evento.target as HTMLInputElement;
            const selecionado = target.checked;
            if (selecionado) {
                this.$emit('valorSelecionado', this.selecao);
            } else {
                this.$emit('valorDeselecionado', this.selecao);
            }
        },
    },
    emits: ['valorSelecionado', 'valorDeselecionado'],
    components: { VariavelComponent },
});
</script>

<template>
    <label :for="selecaoId">
        <input
            type="checkbox"
            :name="selecaoId"
            :id="selecaoId"
            :value="selecao"
            v-model="valores"
            @change="alterarSelecao"
        />
        {{ selecao.getLabel() }}
    </label>
    <div v-if="selecionado && selecao.getVariaveis()">
        <VariavelComponent
            v-for="variavel in selecao.getVariaveis()"
            :key="variavel.getId()"
            :variavel="variavel"
            :valor="variavel.getValor()"
            @update:valor="variavel.setValor($event)"
        ></VariavelComponent>
    </div>
</template>
