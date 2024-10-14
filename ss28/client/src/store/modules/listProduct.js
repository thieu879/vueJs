import axios from "axios";

export const listProduct = {
  state: {
    product: [],
  },
  mutations: {
    setAllProduct(state, products) {
      state.product = products;
    },
  },
  actions: {
    async getAllProduct({ commit }) {
      const products = await axios.get("http://localhost:3000/product");
      commit("setAllProduct", products.data);
    },
  },
};
