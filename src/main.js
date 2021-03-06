import Vue from 'vue';
import App from './App.vue';
import store from './state/index';
import { router } from './router';
import './../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
