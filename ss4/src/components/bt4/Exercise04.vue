<template>
    <div>
        <input @input="handleChange" type="text">
    </div>
</template>

<script setup>

    const handleChange = (e)=>{
        console.log(e.target.value);
        
    }
</script>

<style scoped>

</style>