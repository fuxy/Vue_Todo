import "./firebase";
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueFire from "vuefire";

Vue.use(VueFire);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  created() {
    store.dispatch("loadTodos");
  }
}).$mount("#app");
