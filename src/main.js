import Vue from 'vue'
import App from './App.vue'
import store from "./store/index";
import router from "./router/index"
import * as data from '../dependencies/data.json'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
  created() {
    this.$store.commit("setData", data.default)
    this.$store.commit("setMutatedData", data.default)
  }
}).$mount('#app')
