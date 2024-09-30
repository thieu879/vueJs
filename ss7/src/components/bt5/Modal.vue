<template>  
  <div class="modal-overlay" v-if="isVisible">  
    <div class="modal">  
      <div class="modal-header">  
        <slot name="header"></slot>  
      </div>  
      <div class="modal-body">  
        <slot name="body"></slot>  
      </div>  
      <div class="modal-footer">  
        <button class="button" @click="closeModal">Close</button>  
      </div>  
    </div>  
  </div>  
</template>  

<script setup>  
import { ref } from 'vue';  

const isVisible = ref(true);  

function closeModal() {  
  isVisible.value = false;  
}  
</script>  

<style scoped>  
.modal-overlay {  
  position: fixed;  
  top: 0;  
  left: 0;  
  right: 0;  
  bottom: 0;  
  background: rgba(0, 0, 0, 0.5);  
  display: flex;  
  justify-content: center;  
  align-items: center;  
}  

.modal {  
  background: white;  
  padding: 20px;  
  border-radius: 8px;  
}  

.modal-header,  
.modal-body,  
.modal-footer {  
  margin-bottom: 10px;  
}  

.button {  
  padding: 5px 15px;  
}  
</style>