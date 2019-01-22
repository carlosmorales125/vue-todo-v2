import Vue from 'vue';
import Router from 'vue-router';
import Todo from './pages/TodoListPage.vue';
import Login from './pages/LoginPage.vue';
import SignUp from './pages/SignUpPage.vue';
import Profile from './pages/ProfilePage.vue';
import Header from './layout/Header.vue';
import Footer from './layout/Footer.vue';
import store from './state/index';

Vue.use(Router);

export const router = new Router({
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
            },
        },
        {
            path: '/signup',
            name: 'signup',
            components: {
                default: SignUp,
            },
        },
        {
            path: '/profile',
            name: 'profile',
            components: {
                default: Profile,
                header: Header,
                footer: Footer,
            },
        }
    ],
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/signup'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = JSON.parse(localStorage.getItem('__vue__todo__app__user__'));

    if (authRequired && !loggedIn) {
        return next('/login');
    } else {
        // We load the user from localStorage if not it's not already loaded
        // This takes care of the user refreshing the page.
        if (loggedIn) {
            store.commit('loadUser', loggedIn);
        }
    }
    next();
});