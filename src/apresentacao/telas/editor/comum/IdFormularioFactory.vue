<script lang="ts">
import { IIdFormularioFactory } from '@/dominio/editor/comum/IdFormularioFactory';
import { Titulo } from '@/dominio/editor/comum/Titulo';
import { defineComponent, inject } from 'vue';

export default defineComponent({
    name: 'IdFormularioFactory',
    setup() {
        const factory = inject<IIdFormularioFactory>('idFormularioFactory');
        if (!factory) {
            throw new Error('Não injetada a dependência idFormularioFactory');
        }
        return {
            factory,
        };
    },
    props: {
        titulo: {
            type: Titulo,
            required: false,
        },
    },
    data() {
        return {
            esteIdFormulario: this.idFormulario || '',
            erro: '',
        };
    },
    methods: {
        criarDoTitulo(titulo?: Titulo) {
            this.erro = '';
            try {
                if (titulo) {
                    return this.factory.criarDeTitulo(titulo);
                } else {
                    return null;
                }
            } catch (e) {
                if (e instanceof Error) {
                    this.erro = e.message;
                } else {
                    this.erro =
                        'Ocorreu um erro desconhecido ao criar o Id de Formulário';
                }
                return null;
            }
        },
        gerarIdDoTitulo(titulo?: Titulo) {
            const idGerado = this.criarDoTitulo(titulo);
            this.$emit('gerouId', idGerado);
            return idGerado;
        },
    },
    emits: ['gerouId'],
});
</script>

<template>
    <div>
        <b>Id do Formulário: </b>
        <span class="idExibido"> {{ gerarIdDoTitulo(titulo) }} </span>
    </div>
</template>

<style scoped>
div {
    color: gray;
    margin-bottom: 20px;
}
</style>
