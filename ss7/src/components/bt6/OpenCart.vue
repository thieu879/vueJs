<template>  
  <div>  
    <Card>  
      <template v-slot:header>  
        <h3>Thông tin sản phẩm</h3>  
      </template>  
      <template v-slot:body>  
        <p>Đây là mô tả ngắn gọn về sản phẩm này. Sản phẩm có các tính năng nổi bật và giá cả hợp lý.</p>  
      </template>  
      <template v-slot:footer>  
        <button @click="viewDetails">Xem chi tiết</button>  
      </template>  
    </Card>  
  </div>  
</template>  

<script setup>  
import Card from './Card.vue';  

const viewDetails = () => {  
  alert('Chi tiết sản phẩm sẽ được hiển thị ở đây.');  
};  
</script>  

<style>  

</style>