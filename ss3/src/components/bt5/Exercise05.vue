<template>
  <div>
    <button @click="handleClick('clicked')">Click me</button>
  </div>
</template>

<script setup>
    const handleClick = (e) => {
    console.log(e);
    };
</script>

<style scoped>
</style>
