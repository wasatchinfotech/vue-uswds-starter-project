
const initialState = {
  isLoading: false
}
export const system = {
  namespaced: true,
  state: initialState,
  actions: {
    loading(context) {
      context.commit('markLoading');
    },

    loadingComplete(context) {
      context.commit('markUnloading');
    }
  },
  mutations: {
    markLoading(state) {
      state.isLoading = true;
    },
    markUnloading(state) {
      state.isLoading = false;
    }
  }
}
