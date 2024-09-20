<template>
  <div>
    <button @click="showNotification">Show notification</button>
    <transition name="fade">
      <div v-if="isVisible" class="notification">
        <p>Hiển thị thông báo ở đây</p>
        <button @click="closeNotification">X</button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isVisible = ref(false);

const showNotification = () => {
  isVisible.value = true;
  
};

const closeNotification = () => {
  isVisible.value = false;
};


</script>

<style scoped>
.notification {
  position: fixed;
  top: 10px;
  left: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

</style>
