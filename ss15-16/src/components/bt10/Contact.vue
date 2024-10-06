<template>
  <div>
    <h2>Contact</h2>
    <p>Email: {{ employee?.contact }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const employees = ref([
  { id: 1, contact: 'alice@example.com' },
  { id: 2, contact: 'bob@example.com' },
  { id: 3, contact: 'charlie@example.com' },
]);

const employee = employees.value.find(emp => emp.id === parseInt(route.params.id));
</script>

<style scoped>

</style>
