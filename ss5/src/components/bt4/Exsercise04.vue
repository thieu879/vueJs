<template>
    <div>
        <button @click="handleClick1">hiện</button>
        <button @click="handleClick2">ẩn</button>
        <p v-show="check">welcome to ...</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const check = ref(false) 
    const handleClick1 = ()=>{
        check.value = true
    }
    const handleClick2 = ()=>{
        check.value = false
    }
</script>

<style scoped>

</style>