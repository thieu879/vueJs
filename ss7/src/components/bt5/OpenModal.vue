<template>  
  <div>  
    <Modal>  
      <template v-slot:header>  
        <h3>Thông báo từ hệ thống</h3>  
      </template>  
      <template v-slot:body>  
        <p>Đây là nội dung của modal. Bạn có thể đóng modal bằng cách nhấn vào nút 'Close'.</p>  
      </template>  
    </Modal>  
  </div>  
</template>  

<script setup>  
import Modal from './Modal.vue';  
</script>  

<style>  

</style>