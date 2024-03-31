import { createApp } from 'vue';
import router from './router';
import i18n from './i18n';

// css
import './assets/css/font-icon.css';
import './assets/css/font-family.css';
import './assets/css/main.css';
// components
import App from './App.vue';



createApp(App).use(router).use(i18n).mount('#app');