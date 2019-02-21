import Vue from 'vue'
import VueRouter from 'vue-router'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import '@/sass/styles.scss'

import Register from './components/Register.vue'
import Login from './components/Login.vue'
import App from './App.vue'

Vue.config.productionTip = false

const routes = [
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(Buefy)
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
