import Vue from "vue";
import Vuex from "vuex";
import { system } from "./system.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app: system
  }
});
