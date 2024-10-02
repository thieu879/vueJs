<template>
    <div>
        <button @click="handleClick">Counter: {{count}}</button>
    </div>
</template>

<script setup>
import {onUpdated, ref } from 'vue';

    const count = ref(0)
    onUpdated(()=>{
        console.log("dữ liệu đã thay đổi");
        
    })
    const handleClick = ()=>{
        count.value++
    }
</script>

<style scoped>

</style>