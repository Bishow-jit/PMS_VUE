import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Vue3Toastify, {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const app = createApp(App)

app.use(router).use(Vue3Toastify, {
    autoClose: 5000,
  });
app.use(axios)
// app

app.mount('#app')
