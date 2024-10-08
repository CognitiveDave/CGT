import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SmartTable from 'vuejs-smart-table'
import '@popperjs/core/dist/umd/popper';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'


Vue.use(SmartTable)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
