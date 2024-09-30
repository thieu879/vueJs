<template>  
  <div v-if="showForm" class="form-container">  
    <form>  
      <div>  
        <label for="name">Name:</label>  
        <input type="text" id="name" />  
      </div>  
      <div>  
        <label for="email">Email:</label>  
        <input type="email" id="email" />  
      </div>  
      <div>  
        <label for="address">Address:</label>  
        <input type="text" id="address" />  
      </div>  
      <button @click.prevent="closeForm">Close</button>  
    </form>  
  </div>  
</template>  

<script setup>  
import { defineEmits, defineProps } from 'vue';  

const emit = defineEmits(['close-form']);  
const props = defineProps({  
  showForm: Boolean  
});  

const closeForm = () => {  
  emit('close-form');  
};  
</script>  

<style scoped>  
.form-container {  
  padding: 20px;  
  border: 1px solid #ccc;  
  margin-top: 10px;  
  border-radius: 5px;  
}  
</style>