<script lang="ts">
import { defineComponent } from 'vue';
import { Editor } from '@/dominio/editor/Editor';
import { Titulo } from '@/dominio/editor/Titulo';
import { Subtitulo } from '@/dominio/editor/Subtitulo';
import QuestaoComponent from './questoes/questao/QuestaoComponent.vue';
import QuestaoEdicao from './questoes/questao/QuestaoEdicao.vue';
import DadosDoFormularioEdicao from './dados-do-formulario/DadosDoFormularioEdicao.vue';
import { QuestaoEditavel } from '@/dominio/editor/QuestaoEditavel';

export default defineComponent({
    name: 'TelaEditor',
    components: {
        QuestaoComponent,
        DadosDoFormularioEdicao,
        QuestaoEdicao,
    },
    props: {
        editor: {
            type: Editor,
            required: false,
        },
    },
    data() {
        const questoes = this.editor?.getQuestoes() || [];
        return {
            questoes,
            adicionarQuestao: false,
            idFormulario: this.editor?.getId(),
            titulo: this.editor?.getTitulo(),
            subtitulo: this.editor?.getSubtitulo(),
        };
    },
});
</script>

<template>
    <div>
        <DadosDoFormularioEdicao
            :titulo="(titulo as Titulo)"
            :subtitulo="(subtitulo as Subtitulo)"
        ></DadosDoFormularioEdicao>

        <article class="questoes">
            <header>
                <h2>Questões</h2>
            </header>
            <QuestaoComponent
                v-for="questao in questoes"
                :key="questao.getId().toString()"
                :questao="(questao as QuestaoEditavel)"
            ></QuestaoComponent>
            <a
                href="#"
                role="button"
                class="outline adicionar"
                @click.prevent="adicionarQuestao = true"
                >+ Adicionar Questão</a
            >{{ adicionarQuestao }}
            <div v-if="adicionarQuestao">
                <QuestaoEdicao
                    v-for="questao in questoes"
                    :key="questao.getId().toString()"
                >
                </QuestaoEdicao>
            </div>
        </article>

        <article>
            <header>
                <h2>Modelos</h2>
            </header>
            <a href="#" role="button" class="outline adicionar"
                >+ Adicionar Modelo</a
            >
        </article>
    </div>
</template>

<style scoped>
.questoes {
    padding-bottom: 60px;
}
</style>

<style>
div {
    user-select: none;
}

.emEdicao {
    border-top-color: #0f3d5d;
    border-top-width: 8px;
    border-top-style: solid;
}

.adicionar {
    margin-left: 40px;
}
</style>
