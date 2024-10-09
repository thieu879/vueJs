<template>
    <div>

        <div class="bg-gray-100 p-6">
            <div class="container mx-auto">
                <div class="flex justify-between items-center mb-4">
                    <button @click="openModal('create')" class="bg-blue-600 text-white px-4 py-2 rounded">Thêm mới sản
                        phẩm</button>
                </div>

                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white border border-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="py-2 px-4 border-b text-left">#</th>
                                <th class="py-2 px-4 border-b text-left">Tên sản phẩm</th>
                                <th class="py-2 px-4 border-b text-left">Hình ảnh</th>
                                <th class="py-2 px-4 border-b text-left">Giá</th>
                                <th class="py-2 px-4 border-b text-left">Số lượng (kg)</th>
                                <th class="py-2 px-4 border-b text-left">Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(product, index) in product" :key="product.id">
                                <td class="py-2 px-4 border-b">{{ index + 1 }}</td>
                                <td class="py-2 px-4 border-b">{{ product.name }}</td>
                                <td class="py-2 px-4 border-b">
                                    <img :src="product.img || 'https://via.placeholder.com/50'" alt="Product Image"
                                        class="w-12 h-12">
                                </td>
                                <td class="py-2 px-4 border-b">{{ product.price }} đ</td>
                                <td class="py-2 px-4 border-b">{{ product.quantity }}</td>
                                <td class="py-2 px-4 border-b">
                                    <button @click="openModal('edit', product)"
                                        class="bg-yellow-400 text-white px-2 py-1 rounded">Sửa</button>
                                    <button @click="removeProductById(product.id)"
                                        class="bg-red-400 text-white px-2 py-1 rounded">Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div v-if="showModal" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div class="bg-white p-6 rounded-lg w-1/3">
                <h2 class="text-lg font-bold mb-4">{{ isEditing ? 'Chỉnh Sửa Sản Phẩm' : 'Thêm Mới Sản Phẩm' }}</h2>
                <div>
                    <label for="productName">Tên sản phẩm</label>
                    <input v-model="newProduct.name" id="productName" type="text"
                        class="border w-full px-2 py-1 mb-4" />
                </div>
                <div>
                    <label for="productImg">Hình ảnh (URL)</label>
                    <input v-model="newProduct.img" id="productImg" type="text" class="border w-full px-2 py-1 mb-4" />
                </div>
                <div>
                    <label for="productPrice">Giá</label>
                    <input v-model="newProduct.price" id="productPrice" type="number"
                        class="border w-full px-2 py-1 mb-4" />
                </div>
                <div>
                    <label for="productQuantity">Số lượng (kg)</label>
                    <input v-model="newProduct.quantity" id="productQuantity" type="number"
                        class="border w-full px-2 py-1 mb-4" />
                </div>
                <div class="flex justify-between">
                    <button @click="isEditing ? editProductById(newProduct.id) : createProduct"
                        class="bg-blue-600 text-white px-4 py-2 rounded">
                        {{ isEditing ? 'Lưu thay đổi' : 'Thêm sản phẩm' }}
                    </button>
                    <button @click="closeModal" class="bg-gray-400 text-white px-4 py-2 rounded">Đóng</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const product = ref([]);
const showModal = ref(false);
const isEditing = ref(false);

const newProduct = ref({
    id: null,
    name: '',
    img: '',
    price: '',
    quantity: ''
});

const getAllProduct = async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    product.value = data;
};

onMounted(() => {
    getAllProduct();
});

const removeProductById = async (id) => {
    await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE"
    });
    product.value = product.value.filter(p => p.id !== id);
};

const createProduct = async () => {
    if (!newProduct.value.name || !newProduct.value.price || !newProduct.value.quantity) {
        alert("Vui lòng điền đầy đủ thông tin sản phẩm!");
        return;
    }

    await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct.value)
    });

    newProduct.value = { name: '', img: '', price: '', quantity: '' };

    getAllProduct();
    closeModal();
};

const editProductById = async (id) => {
    if (!newProduct.value.name || !newProduct.value.price || !newProduct.value.quantity) {
        alert("Vui lòng điền đầy đủ thông tin sản phẩm!");
        return;
    }

    await fetch(`http://localhost:3000/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct.value)
    });

    newProduct.value = { name: '', img: '', price: '', quantity: '' };
    isEditing.value = false;

    getAllProduct();
    closeModal();
};

const openModal = (mode, productToEdit = null) => {
    if (mode === 'edit' && productToEdit) {
        newProduct.value = { ...productToEdit };
        isEditing.value = true;
    } else {
        newProduct.value = { name: '', img: '', price: '', quantity: '' };
        isEditing.value = false;
    }
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};
</script>

<style scoped></style>
