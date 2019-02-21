import Vue from 'vue'
import VueRouter from 'vue-router'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import '@/sass/styles.scss'

import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Admin from './components/Admin.vue'
import Profile from './components/Profile.vue'
import Tasks from './components/Tasks.vue'
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
  },
  {
    path: '/admin',
    component: Admin,
    children: [
      {
        path: '/profile',
        component: Profile
      },
      {
        path: '/tasks',
        component: Tasks
      }
    ]
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
