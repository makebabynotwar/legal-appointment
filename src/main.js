import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

require('@/store/subscriber')

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

store.dispatch('auth/attempt', localStorage.getItem('token'))
.then(()=>{
    createApp(App).use(store).use(router).mount('#app')
});
