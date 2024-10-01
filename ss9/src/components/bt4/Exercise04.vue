<template>
    <div>
        <p>Tiến độ hoàn thành: {{value}}%</p>
        <input type="range" v-model="value">
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const value = ref()
</script>

<style scoped>

</style>