<script lang="ts"></script>

<template>
    <label for="titulo">
        Título
        <input
            type="text"
            id="tituloFormulario"
            name="tituloFormulario"
            placeholder="Título do formulário"
            :value="editor.getTitulo()"
            @input="setTitulo"
            @focusout="setTitulo"
            required
        />
    </label>
</template>
