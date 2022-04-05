import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './Routes/routes';
import store from './Store/index'
import VToaster from 'v-toaster';
import 'v-toaster/dist/v-toaster.css';


Vue.use(VueRouter);
Vue.use(VToaster, {timeout: 2000})

const router = new VueRouter({
  routes: routes,
  mode: process.env.VUE_APP_ROUTER_MODE
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
