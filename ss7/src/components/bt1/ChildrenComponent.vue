<template>
    <div>
        <p>prop Name: {{props.name}}</p>
    </div>
</template>

<script setup>
    const props = defineProps(["name"]);
</script>

<style scoped>
</style>
