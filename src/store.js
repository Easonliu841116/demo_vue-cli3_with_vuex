import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    products: {},
    categories: {},
  },
  strict: true,
  // 操作狀態，並建議使用常數命名；且不可操作非同步行為(ex: setTimeOut & ajax)
  mutations: {
    LOADING(state, payload) {
      const data = state;
      data.isLoading = payload;
    },
    PRODUCTS(state, payload) {
      const data = state;
      data.products = payload;
    },
    CATEGORIES(state, payload) {
      const data = state;
      const categoriySet = new Set();
      payload.forEach((item) => {
        categoriySet.add(item.category);
      });
      // eslint-disable-next-line
      console.log(payload);
      data.categories = Array.from(categoriySet);
      // eslint-disable-next-line
      console.log(data.categories);
    },
  },
  // 操作行為，其中context 為固定參數， payload 為外部傳遞(可自訂)
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    getProducts(context) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      context.commit('LOADING', true);
      axios.get(url).then((response) => {
        context.commit('PRODUCTS', response.data.products);
        context.commit('CATEGORIES', response.data.products);
        context.commit('LOADING', true);
      });
    },
  },
});
