import { createApp } from 'vue'
import '@/assets/scss/all.scss';
import App from './App.vue'

const app = createApp(App)

//引入router
import router from './router'
app.use(router as any)
app.mount('#app')

