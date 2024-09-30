<template>
  <div>
    <h1>Giá trị đếm: {{ count }}</h1>
    <CountChildren @increment="incrementCount" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CountChildren from './CountChildren.vue';

const count = ref(0);

function incrementCount() {
  count.value += 1;
}
</script>

<style scoped>
</style>
