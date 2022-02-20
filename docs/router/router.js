import * as VueRouter from 'vue-router'
import Grid from '../views/components/Grid.vue'
import Home from '../views/Home.vue'
import Components from '../views/Components'
import Intro from '../views/components/Intro'
import Images from '../views/components/Images'
import Ratio from '../views/components/Ratio'
import NavLinks from '../views/components/NavLinks'

const routes = [
  { path: '/', component: Home },
  {
    path: '/components',
    component: Components,
    children: [
      { path: '', component: Intro },
      { path: 'grid', component: Grid },
      { path: 'images', component: Images },
      { path: 'ratio', component: Ratio },
      { path: 'nav-links', component: NavLinks },
    ]
  },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
  linkActiveClass: 'fd-nav-link--active',
  linkExactActiveClass: 'fd-nav-link--exact-active',
})

export { router }
