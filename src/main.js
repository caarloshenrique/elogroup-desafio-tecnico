import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import "@mdi/font/css/materialdesignicons.css";
import VeeValidate from "vee-validate";
import router from "./router";
import "@/plugins";
import store from "./commons/store";

Vue.config.productionTip = false;

Vue.use(VeeValidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
