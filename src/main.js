/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { createMemoryHistory, createRouter } from "vue-router";
import { createApp } from 'vue'

// Components
import App from './App.vue'
import CompanyList from './views/company/CompanyList.vue'


// set router
const routes = [
  { path: '/'                       , component: App },
  { path: '/company/companyList'    , component: CompanyList},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

// Composables
const app = createApp(App)

registerPlugins(app)

app
  .use(router)
  .mount('#app')
