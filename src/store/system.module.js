
const initialState = {
  isLoading: false,
  currentPath : undefined
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
    },

    recordNextPath(context, path) { 
      context.commit('markNextPath', path);
    }
  },
  mutations: {
    markLoading(state) {
      state.isLoading = true;
    },
    markUnloading(state) {
      state.isLoading = false;
    },
    markNextPath(state, path) {
      state.currentPath = path;
    }
  }
}
