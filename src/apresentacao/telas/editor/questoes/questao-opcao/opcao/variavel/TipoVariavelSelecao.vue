<script lang="ts">
import { defineComponent, inject } from 'vue';
import { TipoVariavelRepository } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/tipo-variavel/TipoVariavelRepository';
import { TipoVariavelID } from '@/dominio/editor/questoes/questao-opcao/opcao/variavel/tipo-variavel/TipoVariavelID';

export default defineComponent({
    name: 'TipoVariavelSelecao',
    setup() {
        const repository = inject<TipoVariavelRepository>(
            'tipoVariavelRepository',
        );
        if (!repository) {
            throw new Error(
                'Não injetada a dependência tipoVariavelRepository',
            );
        }
        const tiposVariaveis = repository.obterTodos();
        return {
            tiposVariaveis,
        };
    },
    props: {
        id: {
            type: TipoVariavelID,
            required: false,
        },
    },
    data() {
        return {
            selecionado: '',
            erro: '',
        };
    },
    watch: {
        selecionado(novaSelecao: string) {
            console.log({ novaSelecao });
            if (!novaSelecao) {
                console.log('!novaSelecao');
                return this.$emit('selecionou', null);
            } else {
                debugger;
                const tipoVariavel = this.tiposVariaveis.find(tipo => {
                    return tipo.getId().toString() === novaSelecao;
                });
                console.log({ tipoVariavel });
                if (!tipoVariavel) {
                    console.log('!tipoVariavel');
                    this.erro = 'Erro ao selecionar o tipo de variável';
                    return this.$emit('selecionou', null);
                } else {
                    this.$emit('selecionou', tipoVariavel.getId());
                }
            }
        },
    },
    emits: ['selecionou'],
});
</script>

<template>
    <label for="tipoVariavel">Tipo de variável</label>
    <select id="tipoVariavel" v-model="selecionado" required>
        <option value="" selected>Selecione o tipo…</option>
        <option
            v-for="tipo in tiposVariaveis"
            :key="tipo.getId().toString()"
            :value="tipo.getId().toString()"
        >
            {{ tipo.getTitulo() }}
        </option>
    </select>

    <article class="erro" v-if="erro">
        {{ erro }}
    </article>
</template>

<style scoped>
input {
    background-color: white;
}
</style>
