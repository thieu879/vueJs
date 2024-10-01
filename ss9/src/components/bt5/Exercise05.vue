<template>
  <div>
    <div>
      <label>Giới tính đã chọn: {{selectedGender}}</label>
    </div>
    <div>
      <input type="radio" id="male" value="Nam" v-model="selectedGender" />
      <label for="male">Nam</label>
    </div>

    <div>
      <input type="radio" id="female" value="Nữ" v-model="selectedGender" />
      <label for="female">Nữ</label>
    </div>

    <div>
      <input type="radio" id="other" value="Khác" v-model="selectedGender" />
      <label for="other">Khác</label>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const selectedGender = ref('');
</script>

<style scoped>

</style>
