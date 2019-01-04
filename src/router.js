import Vue from 'vue';
import Router from 'vue-router';
import Todo from './pages/TodoListPage.vue';
import Login from './pages/LoginPage.vue'
import Header from './layout/Header.vue';
import Footer from './layout/Footer.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            components: {
                default: Todo,
                header: Header,
                footer: Footer,
            },
        },
        {
            path: '/login',
            name: 'login',
            components: {
                default: Login,
                header: Header,
                footer: Footer,
            },
        }
    ],
});
