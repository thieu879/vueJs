<template>  
  <div>  
    <button @click="toggleForm">Add user</button>  
    <FormAddUser :showForm="isFormVisible" @close-form="toggleForm" />  
  </div>  
</template>  

<script setup>  
import { ref } from 'vue';  
import FormAddUser from './FormAddUser.vue';  

const isFormVisible = ref(false);  

const toggleForm = () => {  
  isFormVisible.value = !isFormVisible.value;  
};  
</script>  

<style scoped>  
button {  
  padding: 10px 20px;  
  background-color: #007bff;  
  border: none;  
  border-radius: 5px;  
  color: white;  
  cursor: pointer;  
}  

button:hover {  
  background-color: #0056b3;  
}  
</style>