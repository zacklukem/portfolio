<script setup lang="ts">
const props = defineProps<{
    error: NuxtError
}>();
</script>

<template>
    <div class="error">
        <h1>Error {{ error?.statusCode }}</h1>
        <p>{{ error?.message }}</p>
        <a href="/">Return home</a>
    </div>
</template>

<style scoped>
.error {
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>