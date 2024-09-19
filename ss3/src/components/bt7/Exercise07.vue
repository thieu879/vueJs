<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="text" id="inputField" v-model="inputValue" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

    const handleSubmit=()=> {
      console.log("Form submission prevented!");
    }
    const inputValue = ref("")
</script>

<style scoped>
</style>
