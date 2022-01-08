// Import all lib styles first to ensure these are first in generated css
import 'normalize.css'
import '../lib/grid.scss'
import '../lib/container.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/router'

const app = createApp(App)
app.use(router)
app.mount('#app')
