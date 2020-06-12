
const initialState = {
  isUserLoggedIn: false
} 
import { authMessageType } from "@/shared/enums/messageTypes.js";
export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login(context, userData) {
      return new Promise((resolve, reject) => {
        if (userData.username == 'uswds' && userData.password == 'Vue@demo1') {
          context.commit('logUserIn');
          localStorage.setItem('isUserValid', true);
          resolve(userData)
        } else {
          reject(authMessageType.credError);
        }
      })
    },

    logout(context) {
      context.commit('logUserOut');
      localStorage.removeItem('isUserValid');
    }
  },
  mutations: {
    logUserIn(state) {
      state.isUserLoggedIn = true;
    },
    logUserOut(state) {
      state.isUserLoggedIn = false;
    }
  }
}
