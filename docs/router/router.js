import * as VueRouter from 'vue-router'
import Grid from '../views/components/Grid.vue'
import Home from '../views/Home.vue'
import Components from '../views/Components'
import ComponentsHome from '../views/components/ComponentsHome'
import Img from '../views/components/Images'
import Ratio from '../views/components/Ratio'

const routes = [
  { path: '/', component: Home },
  {
    path: '/components',
    component: Components,
    children: [
      { path: '', component: ComponentsHome },
      { path: 'grid', component: Grid },
      { path: 'images', component: Img },
      { path: 'ratio', component: Ratio },
    ]
  },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export { router }
