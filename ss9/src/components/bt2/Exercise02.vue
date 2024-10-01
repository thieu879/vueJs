<template>
  <div>
    <input type="color" v-model="selectedColor" />

    <p>Màu sắc đã chọn: <b>{{ selectedColor }}</b></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedColor = ref('#000000');
</script>

<style scoped>

</style>
