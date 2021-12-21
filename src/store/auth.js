import * as Tokens from "src/utilities/tokens";

export default {
  namespaced: true,
  state: {
    isAuth: false
  },
  getters: {
    isAuth(state) {
      return state.isAuth;
    }
  },
  mutations: {
    setAuth(state, value) {
      if (typeof value !== "boolean") return;
      state.isAuth = value;
    }
  },
  actions: {
    async logout({ commit }) {
      Tokens.cleanTokensData();
      commit("setAuth", false);
    }
  }
};
