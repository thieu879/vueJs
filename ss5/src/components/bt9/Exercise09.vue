<template>
    <div>
        <p>Gender: {{gender[currentIndex]}}</p>
        <button @click="handleClick">ramdom gender</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const gender = [
        "nam",
        "nữ"
    ]
    const currentIndex = ref(0)
    const handleClick = ()=>{
        currentIndex.value = Math.floor(Math.random()*gender.length)
    }
</script>

<style scoped>

</style>