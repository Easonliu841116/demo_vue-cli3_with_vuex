import Vue from 'vue';
import Vuex from 'vuex';
import productModules from './store/product';
import cartModules from './store/cart';

Vue.use(Vuex);

export default new Vuex.Store({
  // 嚴謹模式
  strict: true,
  // state 預設為模組區域變數，mutations 及 actions 預設為全域變數
  state: {
    isLoading: false,
  },
  // 使用 namespaced 將 mutations 及 actions 改為區域變數
  namespaced: true,
  // 操作狀態，並建議使用常數命名；且不可操作非同步行為(ex: setTimeOut & ajax)
  mutations: {
    LOADING(state, payload) {
      const data = state;
      data.isLoading = payload;
    },
  },
  // 操作行為，其中context 為固定參數， payload 為外部傳遞(可自訂)
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
  },
  getters: {
    isLoading(state) {
      const data = state;
      return data.isLoading;
    },
  },
  modules: {
    productModules,
    cartModules,
  },
});
