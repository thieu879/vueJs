<script setup>
    const elementId = "heading"
    const elementClass = "heading"
</script>

<template>
    <div>
        <h1 v-bind:id="elementId" :class="elementClass">heading</h1>
    </div>
</template>


<style scoped>
    .heading{
        color: aqua;
    }
</style>