<template>  
  <div class="card">  
    <div class="card-header">  
      <slot name="header"></slot>  
    </div>  
    <div class="card-body">  
      <slot name="body"></slot>  
    </div>  
    <div class="card-footer">  
      <slot name="footer"></slot>  
    </div>  
  </div>  
</template>  

<script setup>  
</script>  

<style scoped>  
.card {  
  border: 1px solid #ddd;  
  border-radius: 8px;  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  
  max-width: 400px;  
  margin: 20px auto;  
  overflow: hidden;  
}  

.card-header,  
.card-body,  
.card-footer {  
  padding: 20px;  
}  

.card-header {  
  background-color: #f8f9fa;  
  font-weight: bold;  
}  

.card-footer {  
  background-color: #f1f1f1;  
  text-align: right;  
}  
</style>