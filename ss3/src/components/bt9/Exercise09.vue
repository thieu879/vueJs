<template>
    <div>
        <button @click="handleClick">click {{count}} lần</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const count = ref(0)    
    const handleClick = ()=>{
        count.value = count.value+1
    }
</script>

<style scoped>

</style>