<template>
    <div class="settings">
        <h1>Settings</h1>
        <form @submit.prevent="saveChanges">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="form.name" />
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="form.email" />
            <button type="submit">Save</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { onBeforeRouteLeave, useRouter } from 'vue-router';

const form = ref({
    name: '',
    email: '',
});
const savedForm = ref({ ...form.value });

const router = useRouter();

const saveChanges = () => {
    savedForm.value = { ...form.value };
    alert('Changes saved!');
};

const beforeRouteLeave = (to, from, next) => {
    if (JSON.stringify(form.value) !== JSON.stringify(savedForm.value)) {
        const answer = window.confirm('You have unsaved changes. Do you really want to leave?');
        if (answer) {
            next();
        } else {
            next(false);
        }
    } else {
        next();
    }
};

onBeforeRouteLeave(beforeRouteLeave);
</script>

<style scoped>
.settings {
    max-width: 600px;
    margin: 0 auto;
}

label {
    display: block;
    margin-top: 10px;
}

input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
}

button {
    margin-top: 20px;
    padding: 10px 20px;
}
</style>
