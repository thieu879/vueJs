<!-- ParentComponent.vue -->  
<template>  
  <base-button :onClick="handleButtonClick">  
    Click me  
  </base-button>  
</template>  

<script setup>  
import BaseButton from './BaseButton.vue'  

const handleButtonClick = (event) => {  
  console.log('Button clicked!', event)  
}  
</script>