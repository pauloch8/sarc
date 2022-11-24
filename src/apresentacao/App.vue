<script lang="ts">
import '@picocss/pico/css/pico.min.css';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
});
</script>

<template>
    <nav class="container">
        <ul>
            <li>
                <strong>SARC</strong>
            </li>
        </ul>
        <ul>
            <li>
                <router-link to="/">Resposta</router-link>
                <router-link to="/editor">Editor</router-link>
            </li>
        </ul>
    </nav>
    <div class="container">
        <router-view />
    </div>
</template>
