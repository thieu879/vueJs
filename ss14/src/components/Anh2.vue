<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-card>
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-img
                                src="https://khoinguonsangtao.vn/wp-content/uploads/2022/08/anh-meo-cam-phong-lon-meme-meo-cosplay-hoang-thuong.jpg"
                                alt="product image"></v-img>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-card-title>Cute Soft Teddybear</v-card-title>
                            <v-card-subtitle>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam recusandae
                                    quisquam, exercitationem possimus ut inventore adipisci aliquam quis quia
                                    repudiandae ipsa, aliquid eos nam dicta? Eaque exercitationem ullam minima
                                    dolorum!</span>
                                <span> (15 reviews)</span>
                            </v-card-subtitle>
                            <v-card-text>
                                <div>
                                    <del>$220</del>
                                    <span class="text-h5 ml-2">$200</span>
                                </div>
                                <div class="mt-3">
                                    <span>Color:</span>
                                    <v-chip-group active-class="primary--text" v-model="selectedColor">
                                        <v-chip v-for="color in colors" :key="color" color={color.value}>{{ color
                                            }}</v-chip>
                                    </v-chip-group>
                                </div>
                                <v-text-field v-model="quantity" label="Quantity" type="number" min="1"
                                    max="10"></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="orange lighten-4" dark>Buy Now</v-btn>
                                <v-btn outlined color="blue lighten-4" class="text-blue">Add to Cart</v-btn>
                            </v-card-actions>
                            <div class="mt-3">Dispatches in 2-3 weeks</div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, reactive } from 'vue';


const quantity = ref(1);
const selectedColor = ref(null)
const colors = reactive(["Red", "Blue", "Yellow", "Green"])
</script>

<style scoped>
.text-orange {
    color: #fb8c00 !important;
}

.text-blue {
    color: #42a5f5 !important;
}
</style>