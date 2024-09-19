<template>
  <div>
    <input v-model="inputValue" @keyup.enter="printNotification" type="text" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref('')

const printNotification = (e) => {
  if (e.shiftKey) {
    alert(inputValue.value);
    inputValue.value = '';
  } else {
    alert('Bạn cần nhấn Shift + Enter');
  }
}
</script>

<style scoped>

</style>
