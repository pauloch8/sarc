<script lang="ts">
import '@picocss/pico/css/pico.min.css';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
});
</script>

<template>
    <header class="container">
        <nav>
            <ul>
                <li>
                    <strong>SARC</strong>
                </li>
            </ul>
            <ul>
                <li>
                    <router-link to="/">Resposta</router-link>
                    <router-link to="/editor">Editor</router-link>
                    <router-link to="/ckeditor">CkEditor</router-link>
                </li>
            </ul>
        </nav>
    </header>
    <main class="container">
        <router-view />
    </main>
</template>

<style lang="scss">
$primary-500: #673ab7;
$primary-600: #5e35b1;
$primary-700: #512da8;

header {
    margin-bottom: 20px;
}

header h1,
header h2,
header h3 {
    margin-bottom: 15px;
}

footer {
    margin-top: 20px;
}
</style>
