<template>  
  <div>  
    <MessageChildren @send-message="handleMessageEvent" />  
  </div>  
</template>  

<script setup>  
import MessageChildren from './MessageChildren.vue';  

const handleMessageEvent = () => {  
  alert('welcome to rekkei academy!');  
};  
</script>  

<style scoped>  

</style>