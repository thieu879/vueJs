<template>
  <base-input v-model="inputValue" placeholder="viết đi">
    <template #prefix>
      <i class="fa fa-user prefix-icon"></i>
    </template>
    <template #suffix>
      <i class="fa fa-check suffix-icon"></i>
    </template>
  </base-input>
</template>

<script setup>
import { ref } from 'vue';
import BaseInput from './BaseInput.vue';

const inputValue = ref('');
</script>

<style scoped>
.prefix-icon, .suffix-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
</style>
