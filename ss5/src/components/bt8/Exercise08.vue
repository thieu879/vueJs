<template>
  <div>
    <button @click="sortAsc">Tăng dần</button>
    <button @click="sortDesc">Giảm dần</button>
    <br>
    <p>{{ arr }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const arr = ref([5, 2, 9, 1, 5, 6]);

const sortAsc = () => {
  arr.value = [...arr.value].sort((a, b) => a - b);
};

const sortDesc = () => {
  arr.value = [...arr.value].sort((a, b) => b - a);
};
</script>

<style scoped>

</style>
