import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { vuestic } from './config/vuestic';
import "vuestic-ui/css";
import "material-design-icons-iconfont/dist/material-design-icons.min.css";

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(vuestic)
app.use(createPinia())
app.use(router)

app.mount('#app')
