<template>
    <div>
        <ul>
            <li v-if="role === 'user'">quyền của bạn là: user</li>
            <li v-else-if="role === 'admin'">quyền của bạn là: admin</li>
            <li v-else>quyền của bạn là: guest</li>
        </ul>
    </div>
</template>

<script setup>
    const role = 'user'
</script>

<style scoped>

</style>
