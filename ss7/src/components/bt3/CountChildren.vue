<template>
  <div>
    <button @click="handleIncrement">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['increment']);

const handleIncrement=() => {
  emit('increment');
}
</script>

<style scoped>
</style>
