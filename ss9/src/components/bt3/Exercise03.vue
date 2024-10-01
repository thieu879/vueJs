<template>
    <div>
        <label for="">Ngày Sinh: {{value}}</label>
        <br>
        <input type="date" v-model="value">
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const value = ref("")
</script>

<style scoped>

</style>