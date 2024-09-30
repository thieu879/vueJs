<template>  
  <div>  
    <button @click="sendMessage">Send message</button>  
  </div>  
</template>  

<script setup>  
import { defineEmits } from 'vue';  

const emit = defineEmits(['send-message']);  

const sendMessage = () => {  
  emit('send-message');  
};  
</script>  

<style scoped>  
button {  
  padding: 10px 20px;  
  background-color: #007bff;  
  border: none;  
  color: white;  
  cursor: pointer;  
  border-radius: 4px;  
}  

button:hover {  
  background-color: #0056b3;  
}  

p {  
  margin-top: 10px;  
  font-style: italic;  
}  
</style>