/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import App from './App.vue'
import router from '@/router/index.js'
import vuetify from "@/plugins/vuetify.js";

import { createApp } from 'vue'

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app');

