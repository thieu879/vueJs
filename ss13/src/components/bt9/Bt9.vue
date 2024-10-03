<template>
    <div>
        <div>
            <label for="name">Name:</label>
            <v-text-field id="name" density="compact" placeholder="Enter your name"
                prepend-inner-icon="mdi-account-outline" variant="outlined"></v-text-field>
        </div>
        <div>
            <label for="company">Company:</label>
            <v-text-field id="company" density="compact" placeholder="Enter your company name"
                prepend-inner-icon="mdi-briefcase-outline" variant="outlined"></v-text-field>
        </div>
        <div>
            <label for="email">Email:</label>
            <v-text-field id="email" type="email" density="compact" placeholder="Enter your email address"
                prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>
        </div>
        <div>
            <label for="phone">Phone No:</label>
            <v-text-field id="phone" density="compact" placeholder="Enter your phone number"
                prepend-inner-icon="mdi-phone-outline" variant="outlined"></v-text-field>
        </div>
        <div>
            <label for="message">Message:</label>
            <v-textarea id="message" density="compact" placeholder="Type your message here"
                prepend-inner-icon="mdi-comment-outline" variant="outlined"></v-textarea>
        </div>
        <v-btn color="blue">
            send
        </v-btn>
    </div>
</template>

<script setup>

</script>

<style scoped>
div {
    margin-bottom: 16px;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
}
</style>
