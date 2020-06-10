import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "uswds/dist/scss/uswds.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import "uswds/dist/js/uswds.js";
