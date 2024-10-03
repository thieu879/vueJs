<template>
    <v-card>
        <v-tabs v-model="tab" bg-color="primary">
            <v-tab value="one">Item One</v-tab>
            <v-tab value="two">Item Two</v-tab>
            <v-tab value="three">Item Three</v-tab>
        </v-tabs>

        <v-card-text>
            <v-tabs-items v-model="tab">
                <v-tab-item value="one">
                    One
                </v-tab-item>

                <v-tab-item value="two">
                    Two
                </v-tab-item>

                <v-tab-item value="three">
                    Three
                </v-tab-item>
            </v-tabs-items>
        </v-card-text>
    </v-card>
</template>

<script setup>
import '@mdi/font/css/materialdesignicons.css';
import { ref } from 'vue';

const tab = ref('one');
</script>

<style lang="scss" scoped></style>
