// import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'element-plus/lib/theme-chalk/index.css';
import 'highlight.js/styles/monokai.css';
import 'loaders.css/loaders.min.css';

import './assets/iconfont/iconfont.css'

const app = createApp(App)

app.config.globalProperties.$axios = axios;
app.use(store).use(router).use(ElementPlus).mount('#app')






