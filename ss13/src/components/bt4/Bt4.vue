<template>
    <div>
        <div class="text-center">
            <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                    <v-btn color="primary" v-bind="props">
                        Dropdown
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me 2' },
]);
</script>

<style lang="scss" scoped>

</style>
