import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$backendIp = 'https://api.oural.dev'

app.use(router)

app.mount('#app')
