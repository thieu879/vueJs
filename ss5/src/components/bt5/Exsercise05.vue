<template>
  <div>
    <ul>
      <li v-for="(number, index) in evenNumbers" :key="index">{{ number }}</li>
    </ul>
  </div>
</template>

<script setup>
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  const evenNumbers = arr.filter(num => num % 2 === 0)
</script>

<style scoped>
</style>
