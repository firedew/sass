// Import all lib styles first to ensure these are first in generated css
import 'normalize.css'
import '../lib/typography.scss'
import '../lib/grid.scss'
import '../lib/container.scss'
import '../lib/navbar.scss'
import '../lib/nav.scss'
import '../lib/display-utils.scss'
import '../lib/img.scss'
import '../lib/ratio.scss'

import { createApp } from 'vue'
import { router } from './router/router'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
