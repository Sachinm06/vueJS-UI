import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Menu from '../views/Menu.vue'
import Menu1 from '../views/Menu-1.vue'
import Menu2 from '../views/Menu-2.vue'
import Menu3and4 from '../views/Menu-3&4.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/menu-1',
    name: 'menu-1',
    component: Menu1
  },
  {
    path: '/menu-2',
    name: 'menu-2',
    component: Menu2
  },
  {
    path: '/menu-3,4',
    name: 'menu-3,4',
    component: Menu3and4
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
