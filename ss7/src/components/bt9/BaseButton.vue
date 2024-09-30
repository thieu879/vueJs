<!-- BaseButton.vue -->  
<template>  
  <button :type="type" @click="handleClick">  
    <slot></slot>  
  </button>  
</template>  

<script setup>  

const props = defineProps({  
  type: {  
    type: String,  
    default: 'button'  
  },  
  onClick: {  
    type: Function,  
    required: true  
  }  
})  

const emit = defineEmits(['click'])  

const handleClick = (event) => {  
  emit('click', event)  
  if (typeof props.onClick === 'function') {  
    props.onClick(event)  
  }  
}  
</script>