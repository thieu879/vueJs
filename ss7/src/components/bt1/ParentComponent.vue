<template>
    <div>
        <ChildrenComponent :name="props1"></ChildrenComponent>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import ChildrenComponent from './ChildrenComponent.vue';

    const props1 = ref("rekkei academy");
</script>

<style scoped>
</style>
