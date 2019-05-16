import Vue from 'vue';
import App from './App.vue';
import { $, jQuery } from './utils/jquery-3.4.1.js';

window.$ = $;
window.jQuery = jQuery;

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
