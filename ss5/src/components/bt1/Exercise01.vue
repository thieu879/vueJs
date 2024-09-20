<template>
    <div>
        <button @click="handleClick">hiện</button>
        <p v-show="check">rikkei academy</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const check = ref(false)
    const handleClick = ()=>{
        check.value = true
    }
</script>

<style scoped>

</style>