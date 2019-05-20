import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Homepage from './components/Homepage.vue';
import Projects from './components/Projects.vue';

Vue.use(VueRouter);

function getApp() {
    const router = new VueRouter({
        mode: 'history',
        base: 'dirname',
        routes: [
            { path: '/', component: Homepage },
            { path: '/projects', component: Projects }
        ]
    });

    const app = new Vue({
        router,
        render: h => h(App)
    });

    return app;
}

getApp().$mount('#app');