import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router.js'
import VueFirestore from 'vue-firestore'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueFirestore)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
