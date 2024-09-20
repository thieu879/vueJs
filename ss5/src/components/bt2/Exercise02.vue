<template>
  <div>
    <button @click="isShow = !isShow">
      {{ isShow ? 'Ẩn' : 'Hiện' }}
    </button>
  </div>
</template>

<script setup>
    import { ref } from 'vue'

    const isShow = ref(false)
</script>

<style scoped>

</style>
