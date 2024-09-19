<template>
    <div>
        <button @click="handleClick('Rikkei Academy')">Get param</button>
    </div>
</template>

<script setup>
    const handleClick = (e) => {
    console.log(e);
    };
</script>

<style scoped>

</style>