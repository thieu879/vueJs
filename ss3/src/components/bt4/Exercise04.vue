<template>
  <div>
    <div
      :class="{ active: isActive }"
      :style="{ backgroundColor: backgroundColor }"
    >
      Block
    </div>

  </div>
</template>

<script setup>
const isActive = true
const backgroundColor= 'blue'

</script>

<style scoped>
.active {
  color: #fff;
}
 
</style>
