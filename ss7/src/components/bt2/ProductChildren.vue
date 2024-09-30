<template>
    <div>
        <ol>
            <li>tên: {{ prop.prop.name }}</li>
            <li>giá: {{ prop.prop.price }}</li>
            <li>số lượng: {{ prop.prop.quantity }}</li>
        </ol>
    </div>
</template>

<script setup>
const prop = defineProps(["prop"]);
console.log(prop);
</script>

<style scoped>

</style>
