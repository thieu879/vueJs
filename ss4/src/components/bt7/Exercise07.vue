<template>
  <div class="p-4">
    <label>Nhập một số:</label>
    <input 
      type="number"
      v-model="number"
      placeholder="Nhập số"
    />
    <p>Giá trị hiện tại: {{ number }}</p>
    <p>Bình phương của số: {{ squaredNumber }}</p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const number = ref(0)

const squaredNumber = computed(() => number.value * number.value)

watch(number, (newVal, oldVal) => {
  console.log(`Giá trị number thay đổi từ ${oldVal} thành ${newVal}`)
})
</script>

<style scoped>

</style>
