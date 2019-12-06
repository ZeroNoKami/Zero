import Vue from "vue";
import App from "./App";
import router from "./router/index";
import BootstrapVue from "bootstrap-vue";
import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";
import VueFilterDateFormat from "vue-filter-date-format";
import moment from "moment";
import Simplert from "vue2-simplert-plugin";
import "vue2-simplert-plugin/dist/vue2-simplert-plugin.css";

Vue.use(Simplert);
Vue.prototype.moment = moment;
Vue.use(VueFilterDateFormat);
Vue.use(PaperDashboard);
Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
