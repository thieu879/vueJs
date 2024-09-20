<template>
    <div>
        <p>{{arr}}</p>
        <button @click="handleClick">ramdom number</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const arr = ref([])
    const handleClick = ()=>{
        arr.value.push(Math.floor(Math.random()*10))
    }
</script>

<style scoped>

</style>