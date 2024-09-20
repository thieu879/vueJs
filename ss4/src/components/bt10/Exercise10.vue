<template>
  <div>
    <button @click="isVisible = true">Hiển thị</button>
    <button @click="isVisible = false">Ẩn</button>

    <p v-if="isVisible">Nội dung được hiển thị</p>
    <p v-else>Nội dung bị ẩn</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isVisible = ref(false)
</script>

<style scoped>

</style>
