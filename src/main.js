import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//halfmoon
import '@/assets/libs/halfmoon-1.1.1/css/halfmoon-variables.min.css'
//bootstrap icon
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
