import * as VueRouter from 'vue-router'
import Grid from '../views/components/Grid.vue'
import Home from '../views/Home.vue'
import Components from '../views/Components'

const routes = [
  { path: '/', component: Home },
  {
    path: '/components',
    component: Components,
    children: [
      { path: 'grid', component: Grid }
    ]
  },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export { router }
