<template>
  <div>
    <img :src="images[currentImageIndex]" alt="123"/>
    
    <button @click="changeImage">Change image</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const images = [
  'https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-lang-que-viet-nam.jpg',
  'https://thumbs.dreamstime.com/b/image-rice-terrace-aerial-shot-beautiful-field-chiang-mai-thailand-made-generative-ai-286877031.jpg',
  'https://th.bing.com/th/id/OIP.bErV_qEpFa0O5I0z28BhUgHaE7?w=626&h=417&rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.REiRF31lTbOzQ8Ii3OUCOwHaGu?w=556&h=505&rs=1&pid=ImgDetMain'
];

const currentImageIndex = ref(0);

const changeImage = () => {
  currentImageIndex.value = Math.floor(Math.random() * images.length);
};
</script>

<style scoped>

</style>
