<template>
    <div>
        <label for="email">Email:</label>
        <input v-model="value" type="text" id="email">
        <p>Giá Trị: {{ value }}</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const value = ref("")
</script>

<style scoped>

</style>
