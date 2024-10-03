<template>
    <v-container class="pa-6">
        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-card elevation="2">
                    <v-card-title class="pb-0">
                        <v-stepper>
                            <v-stepper-header>
                                <v-stepper-step :complete="true">Item Cart</v-stepper-step>
                                <v-divider></v-divider>
                                <v-stepper-step :complete="false">Billing</v-stepper-step>
                                <v-divider></v-divider>
                                <v-stepper-step :complete="false">Payment</v-stepper-step>
                            </v-stepper-header>
                        </v-stepper>
                    </v-card-title>

                    <v-card-text>
                        <v-simple-table class="mb-4">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="d-flex align-center">
                                        <v-img
                                            src="https://khoinguonsangtao.vn/wp-content/uploads/2022/08/anh-meo-cam-phong-lon-meme-meo-cosplay-hoang-thuong.jpg"
                                            alt="product image" class="product-image" max-width="80"
                                            max-height="80"></v-img>
                                        <span class="ml-3">Cute Soft Teddybear</span>
                                    </td>
                                    <td>$200</td>
                                    <td>
                                        <v-text-field v-model="quantity" type="number" min="1" max="10"
                                            class="quantity-field"></v-text-field>
                                    </td>
                                    <td>$200</td>
                                </tr>
                            </tbody>
                        </v-simple-table>

                        <v-divider></v-divider>

                        <v-row class="mt-4">
                            <v-col cols="6" class="font-weight-bold">Sub Total</v-col>
                            <v-col cols="6" class="text-right">$200</v-col>

                            <v-col cols="6" class="font-weight-bold">Discount 5%</v-col>
                            <v-col cols="6" class="text-right">-$10</v-col>

                            <v-col cols="6" class="font-weight-bold">Shipping Charges</v-col>
                            <v-col cols="6" class="text-right">$0</v-col>

                            <v-col cols="6" class="font-weight-bold total-label"><strong>Total</strong></v-col>
                            <v-col cols="6" class="text-right total-value"><strong>$190</strong></v-col>
                        </v-row>
                    </v-card-text>

                    <v-divider class="mb-3"></v-divider>

                    <v-card-actions>
                        <v-btn outlined color="orange lighten-4" class="text-orange">Continue Shopping</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="orange" dark>CheckOut</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';

const quantity = ref(1);
</script>

<style scoped>
.text-orange {
    color: #fb8c00 !important;
}

.product-image {
    border-radius: 8px;
}

.quantity-field {
    max-width: 100px;
}

.total-label {
    font-size: 1.1rem;
}

.total-value {
    font-size: 1.1rem;
    color: #fb8c00;
}
</style>
