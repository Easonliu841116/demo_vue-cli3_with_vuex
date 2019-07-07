import axios from 'axios';

export default {
  state: {
    products: [],
    categories: [],
  },
  // 操作狀態，並建議使用常數命名；且不可操作非同步行為(ex: setTimeOut & ajax)
  mutations: {
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
      data.categories = Array.from(categoriySet);
    },
  },
  // 操作行為，其中context 為固定參數， payload 為外部傳遞(可自訂)
  actions: {
    getProducts(context) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      // 使用 root: true 令模組可以讀取到全域變數
      context.commit('LOADING', true, { root: true });
      axios.get(url).then((response) => {
        context.commit('PRODUCTS', response.data.products);
        context.commit('CATEGORIES', response.data.products);
        context.commit('LOADING', false, { root: true });
      });
    },
  },
  getters: {
    categories(state) {
      const data = state;
      return data.categories;
    },
    products(state) {
      const data = state;
      return data.products;
    },
  },
};
