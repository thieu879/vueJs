<template>
    <div>
        <ul :key="product.id" v-for="product in products">
            <li>id: {{product.id}}</li>
            <li>title: {{product.title}}</li>
            <li>content; {{product.content}}</li>
            <li>athor: {{product.athor}}</li>
        </ul>
    </div>
</template>

<script setup>
    const products =[
        {
            id: 1,
            title: "123",
            content: "123",
            athor: "Thiều"
        },
        {
            id: 2,
            title: "1234",
            content: "1234",
            athor: "vải"
        },
        {
            id: 3,
            title: "12345",
            content: "12345",
            athor: "vải thiều"
        }
    ]
</script>

<style scoped>

</style>