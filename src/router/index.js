import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { secure : true }
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.secure)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.state.auth.loggedIn == false) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } 
  else if(to.matched.some(record => record.meta.guest)) {
      if (store.state.auth.loggedIn == false) {
          next()
        } else {
          next({
              path: '/profile'
            })
        } 
    }
  else {
    next() // make sure to always call next()!
  }
})
export default router
