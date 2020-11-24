import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import datavComponent from 'datav-libs'

createApp(App)
  .use(store)
  .use(router)
  .use(datavComponent)
  .mount('#app')
