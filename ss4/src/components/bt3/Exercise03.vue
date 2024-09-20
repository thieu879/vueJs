<template>
    <div>
        <p>Acreage: {{width * height}}</p>
        <button @click="handleClick">Increase width</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const width = ref(10)
    const height = ref(20)
    const handleClick =()=>{
        width.value = 20
    }
</script>

<style scoped>

</style>