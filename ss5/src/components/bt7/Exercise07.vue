<template>
  <div>
    <button
      :class="{ active: activeIndex === 1 }"
      @click="activeIndex = 1"
    >
      Button 1
    </button>
    <button
      :class="{ active: activeIndex === 2 }"
      @click="activeIndex = 2"
    >
      Button 2
    </button>
    <button
      :class="{ active: activeIndex === 3 }"
      @click="activeIndex = 3"
    >
      Button 3
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(1);
</script>

<style scoped>
button {
  padding: 10px 20px;
  margin: 5px;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  color: #333;
  cursor: pointer;
}

button.active {
  background-color: red;
  color: #fff;
}
</style>
