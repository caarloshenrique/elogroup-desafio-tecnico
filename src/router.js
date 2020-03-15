import Vue from "vue";
import Router from "vue-router";

import Formulario from "./views/cadastro/Cadastro";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Formulario
    }
  ]
});
