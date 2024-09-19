<template>
    <div>
        <p>company: {{active.name}}</p>
        <p>age: {{active.age}}</p>
        <button @click="handleClick">change data</button>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';
    const handleClick = ()=>{
        active.name = "Rikkei Education",
        active.age-=1
    }
    const active = reactive({
        name: "Rikkei Academy",
        age: 2
    })
</script>

<style scoped>

</style>