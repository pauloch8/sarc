<script lang="ts">
import { defineComponent, inject } from 'vue';
import {
    IQuestaoOpcaoEditavel,
    QuestaoOpcaoEditavel,
} from '@/dominio/editor/questoes/questao-opcao/QuestaoOpcaoEditavel';
import {
    IQuestaoSelecaoEditavel,
    QuestaoSelecaoEditavel,
} from '@/dominio/editor/questoes/questao-selecao/QuestaoSelecaoEditavel';
import { Ramificacao } from '@/dominio/editor/questoes/questao-opcao/opcao/Ramificacao';

export default defineComponent({
    name: 'RamificacaoSelecao',
    setup() {
        const proximasQuestoes =
            inject<Array<IQuestaoOpcaoEditavel | IQuestaoSelecaoEditavel>>(
                'proximasQuestoes',
            );
        if (!proximasQuestoes) {
            throw new Error('Não injetada a dependência proximasQuestoes');
        }
        return {
            proximasQuestoes,
        };
    },
    props: {
        ramificacao: {
            type: Ramificacao,
            required: true,
        },
    },
    data() {
        return {
            esteSelecionado: this.ramificacao.getIrPara().toString(),
            erro: '',
        };
    },
    watch: {
        esteSelecionado(novaSelecao: string) {
            this.erro = '';
            if (!novaSelecao) {
                this.erro = 'Valor selecionado vazio';
            } else {
                const ehAvancarOuFim =
                    novaSelecao === 'avançar' ||
                    novaSelecao === 'fim do formulário';
                if (ehAvancarOuFim) {
                    this.ramificacao.setIrPara(novaSelecao);
                    return;
                }
                const proximasQuestoes = this.proximasQuestoes as Array<
                    QuestaoOpcaoEditavel | QuestaoSelecaoEditavel
                >;
                const opcaoSelecionada = proximasQuestoes.find(
                    questao =>
                        questao.getId().toString() === novaSelecao.toString(),
                );
                if (!opcaoSelecionada) {
                    this.erro = 'Erro ao selecionar o tipo de variável';
                    return this.$emit('selecionou', null);
                } else {
                    this.ramificacao.setIrPara(opcaoSelecionada.getId());
                }
            }
        },
    },
});
</script>

<template>
    <label for="ramificacao">
        Ramificação

        <select
            id="ramificacao"
            name="ramificacao"
            v-model="esteSelecionado"
            required
        >
            <option value="avançar" selected>Avançar</option>
            <option
                v-for="questao in (proximasQuestoes as Array<QuestaoOpcaoEditavel | QuestaoSelecaoEditavel>)"
                :key="questao.getId().toString()"
                :value="questao.getId().toString()"
            >
                {{ questao.getTitulo().toString() }}
            </option>
            <option value="fim do formulário">Fim do formulário</option>
        </select>
    </label>

    <article class="erro" v-if="erro">
        {{ erro }}
    </article>
</template>

<style scoped>
.opcoes-move {
    transition: all 0.5s ease-in-out;
}

.lista-opcoes {
    margin-bottom: 40px;
}
</style>
