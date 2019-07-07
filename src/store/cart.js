import axios from 'axios';

export default {
  state: {
    isLoading: false,
    cart: {
      carts: [],
    },
  },
  mutations: {
    CART(state, payload) {
      const data = state;
      data.cart = payload;
    },
  },
  actions: {
    getCart(context) {
      context.commit('LOADING', true, { root: true });
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      axios.get(url).then((response) => {
        if (response.data.data.carts) {
          context.commit('CART', response.data.data);
        }
        context.commit('LOADING', false, { root: true });
      });
    },
    removeCart(context, payload) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${payload}`;
      context.commit('LOADING', true, { root: true });
      axios.delete(url).then(() => {
        context.commit('LOADING', false, { root: true });
        context.dispatch('getCart');
      });
    },
    addtoCart(context, { id, qty }) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit('LOADING', true, { root: true });
      const item = {
        product_id: id,
        qty,
      };
      axios.post(url, { data: item }).then(() => {
        context.commit('LOADING', false, { root: true });
        context.dispatch('getCart');
      });
    },
  },
  getters: {
    cart(state) {
      const data = state;
      return data.cart;
    },
  },
};
