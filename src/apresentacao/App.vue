<script lang="ts">
import '@picocss/pico/css/pico.min.css';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
});
</script>

<template>
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
