<template>
    <v-card>
        <v-card-title>Item</v-card-title>
        <v-card-text>
            <v-data-table :headers="headers" :items="items" item-value="name" class="elevation-1" items-per-page="5">
                <template v-slot:item.status="{ item }">
                    <v-chip :color="getStatusColor(item.status)" dark class="white--text">
                        {{ item.status }}
                    </v-chip>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>
<script setup>
import { ref } from "vue";
const headers = ref([
    { text: "Name", value: "name" },
    { text: "Project Name", value: "project" },
    { text: "Post", value: "post" },
    { text: "Status", value: "status" },
    { text: "Budget", value: "budget" },
]);
const items = ref([
    {
        name: "Sunil Joshi",
        project: "Elite Admin",
        post: "Web Designer",
        status: "Active",
        budget: "$3.9",
    },
    {
        name: "Andrew McDownland",
        project: "Real Homes WP Theme",
        post: "Project Manager",
        status: "Pending",
        budget: "$24.5k",
    },
    {
        name: "Christopher Jamil",
        project: "MedicalPro WP Theme",
        post: "Project Manager",
        status: "Completed",
        budget: "$12.8k",
    },
    {
        name: "Nirav Joshi",
        project: "Hosting Press HTML",
        post: "Frontend Engineer",
        status: "Active",
        budget: "$2.4k",
    },
    {
        name: "Micheal Doe",
        project: "Helping Hands WP Theme",
        post: "Content Writer",
        status: "Cancel",
        budget: "$9.3k",
    },
]);
const getStatusColor = (status) => {
    switch (status) {
        case "Active":
            return "green";
        case "Pending":
            return "orange";
        case "Completed":
            return "blue";
        case "Cancel":
            return "red";
        default:
            return "grey";
    }
};
</script>
<style scoped>
.v-card {
    padding: 20px;
}

.v-chip {
    font-size: 12px;
    font-weight: bold;
}
</style>