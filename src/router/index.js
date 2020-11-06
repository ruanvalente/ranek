import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/produto/:id',
      name: 'product',
      props: true,
      component: () => import('@/views/product/Product.vue')
    }
  ],
  scrollBehavior () {
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})
