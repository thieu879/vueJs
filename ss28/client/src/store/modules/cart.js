import axios from "axios";

export const cart = {
  state: {
    cart: [],
  },
  mutations: {
    setCart(state, cartItems) {
      state.cart = cartItems;
    },
    addToCart(state, product) {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    updateCart(state, updatedItem) {
      const index = state.cart.findIndex((item) => item.id === updatedItem.id);
      if (index !== -1) {
        state.cart[index] = { ...updatedItem };
      }
    },
    removeFromCart(state, id) {
      state.cart = state.cart.filter((item) => item.id !== id);
    },
  },
  actions: {
    async getCart({ commit }) {
      const cartItems = await axios.get("http://localhost:3000/cart");
      commit("setCart", cartItems.data);
    },
    addToCart({ commit }, product) {
      commit("addToCart", product);
    },
    updateCart({ commit }, item) {
      commit("updateCart", item);
    },
    removeFromCart({ commit }, id) {
      commit("removeFromCart", id);
    },
  },
};
