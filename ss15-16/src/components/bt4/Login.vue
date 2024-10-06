<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 class="text-2xl font-semibold mb-6 text-center">Login account</h2>
            <form @submit.prevent="createAccount">
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Your email</label>
                    <input v-model="email" type="email" id="email"
                        class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="name@company.com" required />
                </div>

                <div class="mb-4">
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input v-model="password" type="password" id="password"
                        class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        required />
                </div>



                <button type="submit"
                    class="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700">
                    Login an account
                </button>
            </form>

            <p class="mt-4 text-sm text-center text-gray-500">
                Already have an account?
                <a href="#" class="text-blue-600 hover:underline">Register here</a>
            </p>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>