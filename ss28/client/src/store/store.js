import { cart } from "./modules/cart";
import { listProduct } from "./modules/listProduct";

import { createStore } from "vuex";

const store = createStore({
    modules: {
        listProduct,
        cart
    }
})
export default store;